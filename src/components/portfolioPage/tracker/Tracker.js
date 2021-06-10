import React, { useEffect, useState } from 'react'
import Assets from './Assets'
import portfolioService from '../../../services/portfolio.service'
import authService from '../../../services/auth.service'
import Balance from './Balance'
import RemoveCoin from './RemoveCoin'
import formatSetvice from '../../../services/formatStockData'

const Tracker = ({ newTrades }) => {
  const user = authService.getCurrentUser()
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)
  const [isDeletingAsset, setIsDeletingAsset] = useState(false)
  const [assetToDelete, setAssetToDelete] = useState('')
  const [deletionSuccess, setDeletionSuccess] = useState(false)
  const [message, setMessage] = useState('')

  // console.log('Assets: ', assets)

  const getAssets = () => {
    setLoading(true)
    portfolioService.getPositions(user.id).then(assets => {
      const formattedAssets = formatSetvice.formatAssetsData(assets)
      setAssets(formattedAssets)
      setLoading(false)
    })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAssets, [newTrades])

  //handling asset deletion from portfolio

  const showDeletionPanel = e => {
    const assetId = e.target.value
    setAssetToDelete(assetId)
    setIsDeletingAsset(true)
  }

  const handleAssetDeletionCancel = () => {
    setIsDeletingAsset(false)
  }

  const handleAssetDeletion = () => {
    portfolioService.deleteAsset(assetToDelete).then(({ message }) => {
      const newAssets = assets.filter(
        ({ position: { id } }) => id !== assetToDelete
      )

      setDeletionSuccess(true)
      setMessage(message)

      setTimeout(() => {
        setDeletionSuccess(false)
        setMessage('')
        handleAssetDeletionCancel()
        setAssets(newAssets)
      }, 1500)
    })
  }

  return (
    <div className='tracker-wrapper'>
      <Balance />
      <Assets
        loading={loading}
        assets={assets}
        deleteAsset={showDeletionPanel}
      />

      {isDeletingAsset ? (
        <RemoveCoin
          cancel={handleAssetDeletionCancel}
          successful={deletionSuccess}
          message={message}
          onDelete={handleAssetDeletion}
        />
      ) : null}
    </div>
  )
}

export default Tracker
