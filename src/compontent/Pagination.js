import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'
import './index.css'
export default class Pagination extends Component {
    state={list:[],count:0}
    render() {
        let {current,fn,left}=this.props
        return (
            <div className='fen'>
               <li onClick={left.bind(this,current)}>&lt;</li> 
                {
                    this.state.list.map((item,index)=>(
                        <li key={index} className={index==current?"active":""} onClick={fn.bind(this,index)}>{index+1}</li>
                    ))
                }
                <li>&gt;</li>
            </div>
        )
    }
    componentDidMount(){
        let {page,pageSize,total}=this.props
        axios.post("/pagination",{page:page,pageSize:pageSize,total:total}).then((res)=>{
            this.setState({list:res.data.list})
        })
    }
}
