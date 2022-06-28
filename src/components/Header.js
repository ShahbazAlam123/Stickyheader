import React, { Component } from 'react'
import {Mock} from './Mock'


export default class Header extends Component {
  
  render() {
    const res=Mock.map((item)=>{return item.header})
    const rest=res[1].map((data)=>{
        return data
    })
    console.log(res[1])
    return (
     
        
        <>
        {
        res[1].map((item)=>{
           return(
            <nav>
            <ul>
            <li>
            <img src={rest[0].src}  alt={rest[0].alt}/>
            </li>
              <li><h1>{rest[0].name}</h1></li>
              </ul>  
              </nav>       
                )
          })
        }
        </>
        
     
    
         
    )
  }
}
