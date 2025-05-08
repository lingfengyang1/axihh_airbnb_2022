import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "./modules/main"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail"

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer,
        main: mainReducer
    },
    // 我们可以通过添加以下字段来解决非序列化值的问题 让serializableCheck重置为false就可以忽略对于非序列化值的检查了
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

export default store