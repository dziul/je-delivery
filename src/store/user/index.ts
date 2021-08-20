import { createAction, createReducer } from '@reduxjs/toolkit'

//types
enum Types {
  SetAddress = 'address/SetAddress',
  ResetAddress = 'address/ResetAddress',
}

//state
interface StateAddressProps {
  place: string
  coordinates: number[]
}
interface State {
  address: StateAddressProps
}

const initialState: Partial<State> = {}

//actions
export const setAddress = createAction<StateAddressProps>(Types.SetAddress)
export const resetAddress = createAction(Types.ResetAddress)

//reduces
export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(setAddress, (state, action) => {
      state.address = action.payload
    })
    .addCase(resetAddress, state => {
      state.address = undefined
    })
})
