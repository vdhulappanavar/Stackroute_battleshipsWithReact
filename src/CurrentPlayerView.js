import React, {  Component }  from 'react'
import { OneUserBoard } from './OneUserBoard'

export class CurrentPlayerView extends Component{
  constructor(props){
    super(props)
    this.changeHitMissArray = this.changeHitMissArray.bind(this)
    // let minPos = 0;
    // let maxPos = 8;

    let myBattleshipBoardState = []//Array(8).fill(Array(8).fill(0))
    let oldArray = []
    for(let i=0;i<10;i++){
      //myBattleshipBoardState.push([])
      let temp = [];
      for(let j=0; j<10;j++){
        temp.push(0)
      }
      myBattleshipBoardState.push(temp)
      oldArray.push(temp.slice())
    }
    //console.log(myBattleshipBoardState)
    //let oldArray = myBattleshipBoardState.slice()
    //console.log("oldArray")
    //console.log(oldArray)
    //let locationOfFour = 

    //Hard code positions of the ships for now
    // let posFourShipStart=[4, [0,0]]
    // let posThreeShipStart = [3, [2,0],[2,4]]
    // let posTwoShipStart = [2, [4,0],[4,3],[4,6]]
    // let posOneShipStart = [1, [6,0],[6,2],[6,4],[6,6]]

    let shipPositons = {
      4: [[0,0]],
      3: [[2,0],[2,4]],
      2: [[4,0],[4,3],[4,6]],
      1: [[6,0],[6,2],[6,4],[6,6]]
  }
  // //console.log(myBattleshipBoardState)
  Object.keys(shipPositons).forEach(shipLength=>{
    //console.log(shipLength)
    shipPositons[shipLength].forEach(shipPos =>{
      //console.log(shipPos)
      for(let i=0;i<shipLength;i++){
        //console.log("ship len : " + shipLength)
        //myBattleshipBoardState[1][1] = 1
        myBattleshipBoardState[shipPos[0]][shipPos[1]+i] = 1
        //console.log(myBattleshipBoardState)
      }
    })
  })

  //console.log(myBattleshipBoardState)
    // myBattleshipBoardState.forEach(row => {
    //   row.forEach(cell =>{

    //   })
    // })
    //console.log(myBattleshipBoardState)
    //console.log(Math.random())
    this.state={
      originalBatlleShipState : myBattleshipBoardState,
      hitMissArray  : oldArray
    }
    //this.props.myBattleshipBoardState = myBattleshipBoardState;
  }


  changeHitMissArray(i, j){
    if(this.state.originalBatlleShipState[i][j] ==1){
      console.log("ship there")
      //let temp = this.state.changeHitMissArray
      this.state.hitMissArray[i][j] = 1
    }
    else{
      this.state.hitMissArray[i][j] = -1 
    }
    this.forceUpdate()
  }


  render(){
    return(
    <div>
        <p>Will showcase our ship loactions</p>
        <OneUserBoard changeHitMissArray= {this.changeHitMissArray} shipLocs = {this.state.originalBatlleShipState} arrayToDrawBoard={this.state.hitMissArray}/>
        <p>and other users hit and miss count</p>
        <p>Generate ship positions</p>
    </div>
    )
  } 
}