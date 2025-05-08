import { getHomeGoodPriceInfo, getHomeHighScoreInfo, getHomeDiscountInfo, getHomeHotRecommendInfo, getHomeLongforInfo, getHomePlusInfo } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk中间件的作用就在于允许派发action函数 特别是异步请求函数
// 一般的话 针对从后台获取的数据或者说多个组件共享的数据我们都会交由redux管理 但如果是组件内部的数据可以交由组件自己管理
// export const fetchHomeGoodPriceInfoAction = createAsyncThunk("home/goodPrice", async () => {
//     const res = await getHomeGoodPriceInfo()
//     // console.log(res)
//     return res
// })

// 如果我们为了处理多次异步网络请求而编写多个异步action以及extraReducers的话 那么一旦一部网络请求过多就会导致当前文件过于臃肿 不推荐这样做 更加推荐的做法是利用一个异步action来处理多次异步网络请求
// 但是该做法又存在一定的弊端 比如返回值的问题可以通过统一导出来解决 但是呢 await关键字会阻塞后续代码的执行 也就是说多个await关键字会相互阻塞、处于同步关系 因此的话 我们可以不采用await关键字来将异步请求结果映射到state上 取而代之的是通过promise+派发action的方式即可以让多次网络请求之间处于异步关系、不会相互阻塞
// 异步action中的回调接收的参数有参数和state(state又可以解构为dispatch、getState)
export const fetchHomeInfoAction = createAsyncThunk("home", (payload, {dispatch}) => {

    getHomeGoodPriceInfo().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreInfo().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountInfo().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })

    getHomeHotRecommendInfo().then(res => {
        dispatch(changeHotRecommendInfoAction(res))
    })

    getHomeLongforInfo().then(res => {
        dispatch(changeLongforInfoAction(res))
    })

    getHomePlusInfo().then(res => {
        dispatch(changePlusInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        hotRecommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, {payload}) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, {payload}) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, {payload}) {
            state.discountInfo = payload
        },
        changeHotRecommendInfoAction(state, {payload}) {
            state.hotRecommendInfo = payload
        },
        changeLongforInfoAction(state, {payload}) {
            state.longforInfo = payload
        },
        changePlusInfoAction(state, {payload}) {
            state.plusInfo = payload
        }
    },
    // extraReducers: builder => {
    //     builder.addCase(fetchHomeGoodPriceInfoAction.pending, () => console.log("当前仍然处于等待状态"))
    //         .addCase(fetchHomeGoodPriceInfoAction.fulfilled, (state, {payload}) => {
    //             // console.log(payload)
    //             state.goodPriceInfo = payload
    //         })
    //         .addCase(fetchHomeGoodPriceInfoAction.rejected, () => console.log("当前处于拒绝状态"))
    // }
})

export const {changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeHotRecommendInfoAction, changeLongforInfoAction, changePlusInfoAction} = homeSlice.actions
export default homeSlice.reducer