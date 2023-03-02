import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts  = createAsyncThunk(
  'contacts/fetchAll',
  async(_, thunkApi) =>{
    try{
      const response = await axios.get('/contacts')
      return response.data
    }catch (error){
      return  thunkApi.rejectWithValue(error.message)
    }
  }
)
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async({ name, number }, thunkApi) =>{
    try{
      const response = await axios.post('/contacts',{ name, number })
      return response.data
    }catch (error){
      return  thunkApi.rejectWithValue(error.message)
    }
  }
)
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async(id , thunkApi) =>{
    try{
      const response = await axios.delete(`/contacts/${id}`)
      return response.data.id
    }catch (error){
      return  thunkApi.rejectWithValue(error.message)
    }
  }
)
