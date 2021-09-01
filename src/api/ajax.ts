import axios, { Method } from 'axios'
import _get from 'lodash/get'

const client = axios.create()

const parseError = () => {
  return {
    success: false,
    errors: true
  }
}

const request = ({ method, url }: { method: Method; url: string }) => {
  return client
    .request({ method, url })
    .then(res => _get(res, 'data'))
    .catch(parseError)
}

export const get = (url: string) => request({ method: 'get', url })
