import { configureStore } from "@reduxjs/toolkit";
import appBarSlice from "./appBarSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./chatSlice";
const store = configureStore({
    reducer : {
        app : appBarSlice,
        search : searchSlice,
        chat : ChatSlice
    }
})
export default store;