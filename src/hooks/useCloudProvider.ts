import { useState, useEffect, useMemo } from 'react'
import _ from 'lodash'
import { calculateDistanceInKm } from 'utils'
import { ICloudItem, IQueryCloud } from 'interface'

interface ICloudProvider {
  gettingUserLocation: boolean,
  selectedRegion: string,
  checkedNearby: boolean,
  userLocation: any,
  regions: string[],
  clouds: ICloudItem[]
}

const initState = {
  gettingUserLocation: true,
  selectedRegion: 'all',
  checkedNearby: false,
  userLocation: null,
  regions: [],
  clouds: []
}

const useCloudProvider = (data: IQueryCloud) => {
  const [state, setState] = useState<ICloudProvider>(initState)
  const { selectedRegion, checkedNearby, userLocation, regions, clouds, gettingUserLocation } = state

  const saveLocation = (loc) => {
    setState(prevState => ({ ...prevState, userLocation: loc, gettingUserLocation: false }))
  }

  const cloudDataWithDistance = useMemo(() => {
    if (!data.clouds) return []

    const result = data.clouds.map(item => {
      let distance = 0
      if (userLocation) {
        const { geo_latitude, geo_longitude } = item
        const { coords } = userLocation
        distance = calculateDistanceInKm(geo_latitude, geo_longitude, coords.latitude, coords.longitude)
      }
      return { ...item, distance }
    })
    return result
  }, [data, userLocation])

  useEffect(() => {
    if (data.clouds) {
      let groupRegions = data.clouds.map(item => item.geo_region)

      let result = cloudDataWithDistance
      setState(prevState => ({ ...prevState, regions: _.uniq(groupRegions), clouds: result }))
    }

  }, [data, cloudDataWithDistance])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation)
    } else {
      setState(prevState => ({ ...prevState, gettingUserLocation: false }))
    }
  }, [])

  const getSelectedClouds = (region: string): any[] => {
    return region === 'all' ? cloudDataWithDistance : cloudDataWithDistance.filter(item => item.geo_region === region)
  }

  const getNearbyClouds = (region: string): any[] => {
    return region === 'all' ? _.orderBy(cloudDataWithDistance, ['distance'], ['asc']) : _.orderBy(cloudDataWithDistance, ['distance'], ['asc']).filter(item => item.geo_region === region)
  }

  const updateSelectedRegion = (value) => {
    const result = checkedNearby ? getNearbyClouds(value) : getSelectedClouds(value)
    setState(prevState => ({ ...prevState, selectedRegion: value, clouds: result }))
  }

  const updateCheckedNearby = (checked) => {
    const result = checked ? getNearbyClouds(selectedRegion) : getSelectedClouds(selectedRegion)
    setState(prevState => ({ ...prevState, checkedNearby: checked, clouds: result }))
  }

  return {
    selectedRegion,
    checkedNearby,
    userLocation,
    regions,
    clouds,
    updateSelectedRegion,
    updateCheckedNearby,
    gettingUserLocation
  }
}

export default useCloudProvider