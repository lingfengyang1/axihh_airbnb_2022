import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        headerConfig: {
            isFixed: false,
            isAlpha: false
        }
    },
    reducers: {
        changeHeaderConfigAction(state, {payload}) {
            // console.log(payload.isFixed)
            state.headerConfig = payload
        }
    }
})

export const {changeHeaderConfigAction} = mainSlice.actions
export default mainSlice.reducer