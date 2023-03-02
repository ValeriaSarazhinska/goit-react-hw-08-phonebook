import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.error = actions.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, actions.payload];
      })
      .addCase(addContact.rejected, (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.error = actions.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== actions.payload);
      })
      .addCase(deleteContact.rejected, (state, actions) => {
        state.contacts.isLoading = false;
        state.contacts.error = actions.payload;
      });
  },
});
export const { filterContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
