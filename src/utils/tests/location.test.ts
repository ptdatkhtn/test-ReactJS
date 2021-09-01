import { degreeToRadian, calculateDistanceInKm } from '../location'

describe('Location utils', () => {
  it('degreeToRadian should work correctly', () => {
    const degree = 18.42
    const result = degreeToRadian(degree)
    expect(result).toEqual(18.42 * Math.PI / 180)
  })

  it('calculateDistanceInKm should calculate correctly', () => {
    const lat1 = -33.92
    const lon1 = 18.42 
    // user location
    const lat2 = 10.7300697
    const lon2 = 106.624873
    const result = calculateDistanceInKm(lat1, lon1, lat2, lon2)
    expect(result).toEqual(10507.262005269879)
  })
})