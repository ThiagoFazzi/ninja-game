export const CHANGE_POSITION = 'CHANGE_POSITION'


const move = (playerX,playerY, screenX, screenY) => ({
  type: CHANGE_POSITION,
  payload: {
      player: {
          x: playerX,
          y: playerY
      },
      screen: {
          x: screenX,
          y: screenY
      }
    }
})

export const moveLeft = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.x > 0){
        const playerX = position.players.player.x - 50
        const playerY = position.players.player.y
        dispatch(move(playerX, playerY, screenX, screenY))
    }
}

export const moveUp = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.y > 100){
        const playerX = position.players.player.x
        const playerY = position.players.player.y - 50
        dispatch(move(playerX, playerY, screenX, screenY))
    }
}

export const moveRight = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    console.log(screenX)
    if(position.players.player.x < (screenX-50)){
        const playerX = position.players.player.x + 50
        const playerY = position.players.player.y
        dispatch(move(playerX, playerY, screenX, screenY))
    }
}

export const moveDown = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.y < 500){
        const playerX = position.players.player.x
        const playerY = position.players.player.y + 50
        dispatch(move(playerX, playerY, screenX, screenY))
    }
}

export const jumpFront = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.x < (screenX-50) && position.players.player.y <= 500){
        const playerX = position.players.player.x
        const playerY = position.players.player.y
        Promise.resolve(_ => {
            setTimeout(
                dispatch(move(playerX + 50, playerY -100, screenX, screenY))
            ,2000)
            })
            //.then(setTimeout(_ => 
            //    dispatch(move(playerX + 50, playerY, screenX, screenY))
            //,2000))
        
        //.then(console.log('finished'))
    }
}