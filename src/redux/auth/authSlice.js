import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, refreshUser,register } from './operations';



const authSlice = createSlice({
  name: 'auth',
  initialState : {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading:false,
    error: null,
  },

    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(register.fulfilled, (state, actions) => {
          state.user = actions.payload.user;
          state.token = actions.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        })
        .addCase(register.rejected, (state, actions) => {
          state.isLoading = false;
          state.error = actions.payload;
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(login.fulfilled, (state, actions) => {
          state.user = actions.payload.user;
          state.token = actions.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        })
        .addCase(login.rejected, (state, actions) => {
          state.isLoading = false;
          state.error = actions.payload;
        })

        .addCase(logOut.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(logOut.fulfilled, (state, actions) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.isLoading = false;
        })
        .addCase(logOut.rejected, (state, actions) => {
          state.isLoading = false;
          state.error = actions.payload;
        })

        .addCase(refreshUser.pending, (state) => {
          state.isRefreshing = true;
          state.isLoading = true;
          state.error = null;
        })
        .addCase(refreshUser.fulfilled, (state, actions) => {
          state.user = actions.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.isLoading = false;
        })
        .addCase(refreshUser.rejected, (state, actions) => {
          state.isRefreshing = false;
          state.isLoading = false;
          state.error = actions.payload;
        });
    },
  });

  export default authSlice.reducer;
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [login.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//    },
// });

// export default authSlice.reducer;
