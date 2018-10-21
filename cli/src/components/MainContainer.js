import React, { Component } from 'react'
import './BoardContent.css'
import BoardContentContainer from './BoardContentContainer'
import { moveLeft, moveRight, moveDown, moveUp } from '../actions/players'
import { connect } from 'react-redux'

class MainContainer extends Component {

    componentDidMount() {
        document.addEventListener("keyup", this.moveCell)   
    }
    
    moveCell = (event) => {
      console.log('key', event.keyCode)
      const {moveLeft, moveRight, moveUp, moveDown} = this.props
      switch(event.keyCode){
        case 37: //left
          moveLeft() 
          break

        case 39: //Right
          moveRight() 
          break

        case 38: //Up
          moveUp()
          break

        case 40: //Down
          moveDown()
          break

        default:
      }
    }

    render() {
        return(
            <div>
                <div className="Board-Header"></div>
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
    moveDown
}

const mapStateToProps = state => ({
    players: state.payload
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)