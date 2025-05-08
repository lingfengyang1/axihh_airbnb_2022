import {
    CURRENT_PAGE,
    ROOM_LIST,
    TOTAL_COUNT,
    IS_LOADING
} from "./constants"

const initialState = {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    // 默认情况下蒙版是不存在的 即不发送网络请求
    isLoading: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case ROOM_LIST:
            return {...state, roomList: action.roomList}
        case TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default: 
            return state
    }
}

export default reducer