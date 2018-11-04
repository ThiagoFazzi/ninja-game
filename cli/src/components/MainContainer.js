import React, { Component } from 'react'
import './BoardContent.css'
import BoardContentContainer from './BoardContentContainer'
import { moveLeft, moveRight, moveDown, moveUp, jumpFront } from '../actions/players'
import { connect } from 'react-redux'
import HeaderComponent from './HeaderComponent';

class MainContainer extends Component {

    componentDidMount() {
        document.addEventListener("keyup", this.moveCell)   
    }
    
    moveCell = (event) => {
      //console.log('key', event.keyCode)
      const {moveLeft, moveRight, moveUp, moveDown, jumpFront} = this.props
      const screenX = event.target.clientWidth
      const screenY = event.target.clientHeight
      switch(event.keyCode){
        case 37: //left
          moveLeft(screenX, screenY) 
          break

        case 39: //Right
          moveRight(screenX, screenY) 
          break

        case 38: //Up
          moveUp(screenX, screenY)
          break

        case 40: //Down
          moveDown(screenX, screenY)
          break

        case 32: //space
          jumpFront(screenX, screenY)
          break
        default:
      }
    }

    render() {
      const { players } = this.props
        return(
            <div>
                <HeaderComponent posX={players.player.x} posY={players.player.y} />
                <BoardContentContainer/>
                <div className="Board-Footer"></div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    jumpFront
}

const mapStateToProps = state => ({
    players: state.players
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)