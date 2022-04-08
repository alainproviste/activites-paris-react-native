export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DISPLAY_FAVORITES = 'DISPLAY_FAVORITES'

export const addFavorite = payload => ({
  type: ADD_FAVORITE,
  payload
})

export const removeFavorite = payload => ({
  type: REMOVE_FAVORITE,
  payload
})

export const displayFavorites = payload => ({
  type: DISPLAY_FAVORITES,
  payload
})