
import {CHANGE_POSITION} from '../actions/players'

const initState = {
    player: {
      x: 0,
      y: 500
    }
}

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_POSITION:
      return{ ...state, ...action.payload}

    default:
      return state
  }  
}