import React from 'react';
import './App.css'

const Green =(props)=>{
  return (
    <div className='green'>{props.string} conponent 4</div>
  )
}

const Blue=(props)=>{
  return (
    <div className='blue'>
    <p>conponent 3</p>
      <Green string={props.string}/>
    </div>
  )
}

const Orange=(props)=>{
  return (
    <div className='orange'>
    <p>conponent 2</p>
    <Blue string={props.string}/>
    </div>
  )
}

class Red extends React.Component{
  state={
    string:'the data to be passed down'
  }

  render(){
    return(
    <div className='red'>
    {this.state.string}<p>conponent  1</p>
      <Orange string={this.state.string}/>
    </div>)
  }
}

export default Red