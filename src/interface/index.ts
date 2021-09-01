export interface ICloudItem {
  cloud_description: string,
  cloud_name: string,
  geo_latitude: number,
  geo_longitude: number,
  geo_region: string
}

export interface IQueryCloud {
  clouds: undefined | ICloudItem[],
  errors: undefined | any[],
  message: undefined | string
}

export interface ICoords {
  accuracy: number,
  altitude: number | null,
  altitudeAccuracy: number | null,
  heading: string | null,
  latitude: number,
  longitude: number
  speed: number | null
}
export interface IGeoLocation {
  coords: ICoords
}
export type selectedRegion = string | number
export type checkedDistance = boolean

export interface IINIT_STATE  {
  selectedRegion: selectedRegion,
  checkedDistance: checkedDistance,
  geoLocation: IGeoLocation | null
}

export interface IRenderCloudItem { 
  cloud_name: string, 
  cloud_description: string 
}

export interface ITopContentComp {
  regions: string[],
  onChangeRegion: (value: string) => void
  onNearby: (value: boolean) => void
}

export interface ICloudItemComp {
  key: string,
  value: string | number,
  description: string,
  name: string,
  onClick: (value) => void
}
