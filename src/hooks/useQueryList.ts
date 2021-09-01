import { useState, useEffect, useCallback } from 'react'
import { IQueryCloud } from 'interface'

interface IState {
  loading: boolean,
  data: IQueryCloud
}

const initData: IQueryCloud = {
  clouds: undefined,
  errors: undefined,
  message: undefined
}

export const initState = {
  loading: true,
  data: initData,
}

const useQueryList = (api) => {
  const [state, setState] = useState<IState>(initState)
  const { loading, data } = state

  const fetchData = useCallback(async () => {
    const response = await api()
    setState({
      loading: false,
      data: response,
    })
  }, [api]) 

  useEffect(() => {
    fetchData()
  }, [api, fetchData])

  return {
    loading,
    data,
  }
}

export default useQueryList
