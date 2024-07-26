import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://669ffe9fb132e2c136ffc8f0.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    // console.log('Fetched contacts:', response.data);
    return response.data;
  } catch (error) {
    console.error('Fetch contacts error:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({name,  number}, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', {name,  number});  
    // console.log('Added contact:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Add contact error:', error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${id}`);
    // console.log('Deleted contact ID:', id);
    return id;
  } catch (error) {
    console.error('Delete contact error:', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});



