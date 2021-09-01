import { renderHook } from '@testing-library/react-hooks'
import { getCloudProviderList } from 'api'
import useQueryList from '../useQueryList'

const initQuery = {
  clouds: undefined,
  errors: undefined,
  message: undefined
}

describe('useQueryList', () => {
  it('able to setup useQueryList', async () => {
    const { result } = renderHook(() => useQueryList(getCloudProviderList))
    const { data } = result.current

    expect(data).toEqual(initQuery)
  })
})