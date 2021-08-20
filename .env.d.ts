declare namespace NodeJS {
  type EnvKey =
    | 'PUBLIC_URL'
    | 'REACT_APP_ID_NAME'
    | 'REACT_APP_VERSION'
    | 'REACT_APP_NAME'
    | 'REACT_APP_TITLE'
    | 'REACT_APP_DESCRIPTION'
    | 'REACT_APP_GRAPHQL_URL'
    | 'REACT_APP_MAPBOX_API_URL'
    | 'REACT_APP_MAPBOX_API_KEY'

  interface ProcessEnv extends Record<EnvKey, string> {
    NODE_ENV: 'development' | 'production' | 'test'
  }
}
