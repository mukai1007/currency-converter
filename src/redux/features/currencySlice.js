import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fromCurrency: 'USD',
    toCurrency: 'KGS',
    fromAmount: 1,
    toAmount: 0,
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        changeFromCurrency: (state, action) => {
            state.fromCurrency = action.payload
        },
        changeToCurrency: (state, action) => {
            state.toCurrency = action.payload
        },
        changeFromAmount: (state, action) => {
            state.fromAmount = action.payload
        },
        changeToAmount: (state, action) => {
            state.toAmount = action.payload
        }
    }
})

export const { changeFromCurrency, changeToCurrency, changeFromAmount} = currencySlice.actions;
export default currencySlice.reducer;