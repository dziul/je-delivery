import axios, { AxiosPromise } from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_MAPBOX_API_URL,
})

instance.interceptors.request.use(config => {
  config.params = { ...config.params, access_token: process.env.REACT_APP_MAPBOX_API_KEY }
  return config
})

// melhor alternativa se houver Scan Fortify
export const get = <T = unknown>(url: string, params: Record<string, unknown> = {}) =>
  instance({
    url,
    params,
    method: 'GET',
  }) as AxiosPromise<T>
