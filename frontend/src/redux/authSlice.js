import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { //like in usestate we put inital value right.. same here
    user: null,
    loading: false, //for loading state
    error: null,
  },
  reducers: { //like in usestate we put functions right.. same here //actions here
    setLoading:(state, action)=>{
      state.loading = action.payload;
    },

  },
})   
export const {setLoading} = authSlice.actions;
export default authSlice.reducer;

