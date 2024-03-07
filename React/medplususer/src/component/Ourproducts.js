import React, { Component } from 'react'

export default class Ourproducts extends Component {

  constructor(props){
    super(props)
  }
  render() {
    return (
      <section style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <div style={{width:"70%", backgroundColor:"#696060",height:"50px"}}>
            <h3 style={{textAlign:"center",lineHeight:"50px"}}>{this.props.name}</h3>

        </div>
      </section>
    )
  }
}
