import hyRequest from "..";

// 默认查询的是偏移量为0、item数量为20(一页的个数就是20)
export function getEntireRoomListInfo(offset = 0, size = 20) {
    return hyRequest.get({
        url: "/entire/list",
        params: {
            offset,
            size
        }
    })
}