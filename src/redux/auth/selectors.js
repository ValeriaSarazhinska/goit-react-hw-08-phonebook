export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const getIsLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;
