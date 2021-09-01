import React, { useMemo } from 'react'

import { getCloudProviderList } from 'api'
import { useQueryList, useCloudProvider } from 'hooks'
import { Spin, CloudItem } from 'components'
import { ListContainer } from './styles'
import TopContent from './TopContent'
import { IRenderCloudItem, selectedRegion } from 'interface'

const CloudProvider = () => {
  const { loading, data } = useQueryList(getCloudProviderList)
  const {
    regions,
    clouds,
    updateSelectedRegion,
    updateCheckedNearby,
    gettingUserLocation
  } = useCloudProvider(data)

  const onClickCloudItem = value => {
    /*
      Do specific business:
      1) Add to preview or selected clouds for user
      2) If suppose to single select only, will re-select one
    */
  }

  const onChangeSelectRegion = (value: selectedRegion) => {
    updateSelectedRegion(value)
  }

  const onChangeCheckedNearby = (checked: boolean) => {
    updateCheckedNearby(checked)
  }

  const renderCloudItem = ({
    cloud_name,
    cloud_description
  }: IRenderCloudItem) => {
    return (
      <CloudItem
        key={cloud_name}
        value={cloud_name}
        name={cloud_name}
        description={cloud_description}
        onClick={onClickCloudItem}
      />
    )
  }

  const loadingText = useMemo(() => {
    return loading ? 'Loading data ...' : 'Getting user location ...'
  }, [loading])

  return (
    <>
      {(loading || gettingUserLocation) && <Spin tip={loadingText} />}

      {data && !gettingUserLocation && (
        <>
          <TopContent
            regions={regions}
            onChangeRegion={onChangeSelectRegion}
            onNearby={onChangeCheckedNearby}
          />
          {clouds && clouds.length > 0 ? (
            <ListContainer>{clouds.map(renderCloudItem)}</ListContainer>
          ) : (
            <div>There no clouds service</div>
          )}
        </>
      )}
    </>
  )
}

export default CloudProvider
