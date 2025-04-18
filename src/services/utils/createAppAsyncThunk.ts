import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "@/services/store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();
