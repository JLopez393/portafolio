import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lenguaje: 'es',
};

const lenguajeSlice = createSlice({
  name: 'lenguaje',
  initialState,
  reducers: {
    setLenguaje: (state, action) => {
      state.lenguaje = action.payload;
    },
  },
});

export const { setLenguaje } = lenguajeSlice.actions;
export const getLenguaje = (state) => state.lenguajeState.lenguaje;
export default lenguajeSlice.reducer;
