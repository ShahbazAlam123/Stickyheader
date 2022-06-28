import React, { Component } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

export default class Navbar extends Component {
  render() {
    return (
      <div className='main'>
       <Header/>
       <Content/>
       <Footer/>
      </div>
    )
  }
}
