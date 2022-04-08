import { ADD_FAVORITE, DISPLAY_FAVORITES, REMOVE_FAVORITE } from '../actions/favorites'

const initialState = {
  favoritesList: []
}

const removeFavorite = (state, action) => {
  const filteredFavorite = state.favoritesList.filter(item => item.id !== action.payload)

  return {
    ...state,
    favoritesList: filteredFavorite
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favoritesList: [...state.favoritesList, action.payload] }
    case REMOVE_FAVORITE:
      return removeFavorite(state, action)
    case DISPLAY_FAVORITES:
        return {
            ...state,
            favoritesList: action.payload
        }
    default:
      return state
  }
}