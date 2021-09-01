import { get } from './ajax'

// This for all cloud apis
// This will help to separate the api with billing, payment ...
// If we want to work with billing, then create new file billing.ts
// Easy to scalable, maintainable, readable

export const getCloudProviderList = () => {
  return get('https://api.aiven.io/v1/clouds')
}
