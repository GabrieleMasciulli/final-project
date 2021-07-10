import portfolioService from '../services/portfolio.service'
import formatStockData from '../services/formatStockData'

const set_assets = 'SET_ASSETS'
const show_deletion_panel = 'SHOW_DELETION_PANEL'
const cancel_deletion = 'CANCEL_DELETION'
const deletion_success = 'DELETION_SUCCESS'
const deletion_FAILURE = 'DELETION_FAILURE'

const initial_state = {
  assets: [],
  isDeletingAsset: false,
  assetIdToDelete: null,
}

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case set_assets:
      const formattedAssets = formatStockData.formatAssetsData(action.assets)
      return {
        ...state,
        assets: formattedAssets,
      }

    case show_deletion_panel:
      return {
        ...state,
        isDeletingAsset: true,
        assetIdToDelete: action.id,
      }

    case cancel_deletion:
      return {
        ...state,
        isDeletingAsset: false,
        assetIdToDelete: null,
      }

    case deletion_success:
      return {}

    default:
      return state
  }
}

export const getPositions = () => {
  return async dispatch => {
    const assets = await portfolioService.getPositions()
    dispatch({
      type: set_assets,
      assets,
    })
  }
}

export const showDeletionPanel = id => dispatch =>
  dispatch({ type: show_deletion_panel, id })

export const cancelDeletion = () => dispatch =>
  dispatch({ type: cancel_deletion })

export const deletionRequest = id => {
  return async dispatch => {
    try {
      const { message } = await portfolioService.deleteAsset(id)
      dispatch({})
    } catch (error) {}
  }
}

export default reducer
