export const degreeToRadian = (degree : number): number => {
  return degree * Math.PI / 180
}

export const calculateDistanceInKm = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const earthRadiusKm = 6371

  // have to convert degree unit to radian unit before the calculation
  const dLat = degreeToRadian(lat2 - lat1)
  const dLon = degreeToRadian(lon2 - lon1)

  lat1 = degreeToRadian(lat1)
  lat2 = degreeToRadian(lat2)

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadiusKm * c
}