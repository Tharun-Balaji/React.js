import { createSlice } from "react-redux";

const uiSlice = createSlice({
  name: "ui",
  initialState: {notification : null},
  reducers: {
    showNotification(state, action) { 
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open
      };
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice