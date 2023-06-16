import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

interface UserData {
  userEmail: string,
  counterValue: number,
};

const initialState: UserData = {
  userEmail: '',
  counterValue: 0,
};

const userDataSlice = createSlice({
  name: 'userActions',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    increment: (state) => {
      state.counterValue += 1;
    }
  }
});

export const store = configureStore({
  reducer: {
    user: userDataSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export const { increment, setEmail } = userDataSlice.actions;