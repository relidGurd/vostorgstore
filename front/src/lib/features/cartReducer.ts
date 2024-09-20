import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CartState {
  cart: Object[]
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addInCart: (state, action) => {
      console.log(state, action.payload)

      

      state.cart.push(action.payload)
      localStorage.setItem('userCart', JSON.stringify(state.cart))
    },
    // removeItem: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // clearCart: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { addInCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.cart

export default cartSlice.reducer