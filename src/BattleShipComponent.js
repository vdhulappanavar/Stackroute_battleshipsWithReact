import React, { Component } from 'react'
import {  CurrentPlayerView } from './CurrentPlayerView'
import { OtherPlayerBattleshipHitMissView } from './OtherPlayerBattleshipHitMissView'
import './BattleShipComponent.css'


export class BattleShipComponent extends Component{
  render(){
    return (
      <div>
          Will Have To sections one for each user
          <div className="gameContainer">
            <CurrentPlayerView />
            <OtherPlayerBattleshipHitMissView />
          </div>
      </div>
    )
  }
}