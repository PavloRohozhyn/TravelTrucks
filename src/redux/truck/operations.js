import { api } from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTruckDetails = createAsyncThunk(
  "trucks/fetchById",
  async (id, thunkApi) => {
    try {
      const response = await api.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await api.get("/campers");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
