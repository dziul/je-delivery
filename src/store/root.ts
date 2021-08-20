import { configureStore } from '@reduxjs/toolkit'

import { reducer as user } from './user'
import { reducer as products } from './products'
import { reducer as common } from './common'

const store = configureStore({
  reducer: {
    user,
    products,
    common,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
