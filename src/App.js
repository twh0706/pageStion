import React, { Component } from 'react'
import Pagination from  './compontent/Pagination.js'
export default class App extends Component {
  state={count:0}
  render() {
    return (
      <div className='app'>
         <Pagination defaultCurrent={1} total={50} page={1} pageSize={6} current={this.state.count} fn={this.fn} left={this.left}/>
      </div>
    )
  }
  fn=(index)=>{    
    this.setState({count:index})
  }
  left=(index)=>{
    this.setState({count:index--})
  }
}

