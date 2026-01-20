import configureStore from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
  reducer:{
    //we pass slices here(umm means diff diff fields.. like user, job etc)
    auth: authReducer
  }
})

export default store;