import { createAction, createReducer } from '@reduxjs/toolkit'

//types
enum Types {
  SetLoading = 'common/SetLoading',
}

//state

interface State {
  loading: boolean
}

const initialState: State = {
  loading: false,
}

//actions
export const setLoading = createAction<boolean>(Types.SetLoading)

//reduces
export const reducer = createReducer(initialState, builder => {
  builder.addCase(setLoading, (state, action) => {
    state.loading = action.payload
  })
})
