import { createSlice } from "@reduxjs/toolkit";

const appBarSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false
        }
    },
})

export const {toggleMenu,closeMenu} = appBarSlice.actions
export default appBarSlice.reducer


