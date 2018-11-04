import React, { PureComponent } from 'react'
import './BoardContent.css'
import CellComponent from './CellComponent'
import { connect } from 'react-redux'

class BoardContentContainer extends PureComponent {


    render() {
        const { players } = this.props
        return(
            <div className="Board-Content">
                <CellComponent posX={players.player.x} posY={players.player.y} />
            </div>
        )
    }
}

const mapDispatchToProps = {

}

const mapStateToProps = state => ({
    players: state.players
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardContentContainer)