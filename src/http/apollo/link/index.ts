import { from } from '@apollo/client'

import httpLink from './httpLink'
import errorLink from './errorLink'

export default from([errorLink, httpLink])
