import { getEntireRoomListInfo } from "@/services/modules/entire"
import {
    CURRENT_PAGE,
    ROOM_LIST,
    TOTAL_COUNT,
    IS_LOADING
} from "./constants"

export const changeCurrentPageAction = currentPage => ({
    type: CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = roomList => ({
    type: ROOM_LIST,
    roomList
})

export const changeTotalCountAction = totalCount => ({
    type: TOTAL_COUNT,
    totalCount
})

export const changeIsLoadingAction = isLoading => ({
    type: IS_LOADING,
    isLoading
})

// 对于首次请求时 由于不会传递参数 因此得为参数设置默认值才能够执行后续的网络请求发送操作
export const fetchEntireInfoAction = (newPage = 0) => {
    return async (dispatch, getState) => {
        // 通过派发action更新页码
        dispatch(changeCurrentPageAction(newPage))

        // 直接通过最新页码参数来获取数据而不用通过getState获取最新页码再获取最新数据
        // 获取当前页码 根据页码动态获取列表数据
        // const currentPage = getState().entire.currentPage

        // 在发送网络请求之前蒙版存在
        dispatch(changeIsLoadingAction(true))
        // 从第0页开始计数 因此的话 偏移量就可以等价于当前页码*一页的个数
        // const res = await getEntireRoomListInfo(currentPage * 20)
        const res = await getEntireRoomListInfo(newPage * 20)
        // 发送网络请求完毕之后蒙版撤掉
        dispatch(changeIsLoadingAction(false))

        // console.log(res)
        // 将list和totalCount保存到store中
        dispatch(changeRoomListAction(res.list))
        dispatch(changeTotalCountAction(res.totalCount))
    }
}

