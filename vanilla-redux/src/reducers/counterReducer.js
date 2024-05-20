import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
    }
});

export const { increment: incrementAction, decrement: decrementAction } = countSlice.actions;
export default countSlice.reducer;
