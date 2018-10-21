export const CHANGE_POSITION = 'CHANGE_POSITION'


const move = (x,y) => ({
  type: CHANGE_POSITION,
  payload: {
      player: {
          x: x,
          y: y
      }
    }
})

export const moveLeft = () => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.x > 0){
        const posX = position.players.player.x - 10
        const posY = position.players.player.y
        dispatch(move(posX, posY))
    }
}

export const moveUp = () => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.y > 100){
        const posX = position.players.player.x
        const posY = position.players.player.y - 10
        dispatch(move(posX, posY))
    }
}

export const moveRight = () => (dispatch, getState) => {
    const position = getState()
    const posX = position.players.player.x + 10
    const posY = position.players.player.y
    dispatch(move(posX, posY))
}

export const moveDown = () => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.y < 500){
        const posX = position.players.player.x
        const posY = position.players.player.y + 10
        dispatch(move(posX, posY))
    }
}