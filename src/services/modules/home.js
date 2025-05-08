import hyRequest from "..";

export function getHomeGoodPriceInfo() {
    return hyRequest.get({
        url: "/home/goodprice"
    })
}

export function getHomeHighScoreInfo() {
    return hyRequest.get({
        url: "/home/highscore"
    })
}

// 对于折扣数据 每个城市都有属于自己的折扣房型 一般的话 从数据库获取的房型数据并不会从属于某个城市 那么就要求后台或者前端人员自行整理属于某个城市的房型数据了 一般是交由后台人员将该数据整理好之后返还给前端人员的 但有时候后台人员会没做整理就返还数据 此时前端人员就需要整理好数据后在作展示
export function getHomeDiscountInfo() {
    return hyRequest.get({
        url: "/home/discount"
    })
}

export function getHomeHotRecommendInfo() {
    return hyRequest.get({
        url: "/home/hotrecommenddest"
    })
}

export function getHomeLongforInfo() {
    return hyRequest.get({
        url: "/home/longfor"
    })
}

export function getHomePlusInfo() {
    return hyRequest.get({
        url: "/home/plus"
    })
}