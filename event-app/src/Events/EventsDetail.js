import React, { Component } from 'react'
import NavBar1 from '../components/NavBar1'
import CardList from './CardList'

export class EventsDetail extends Component {
    render() {
        return (
            <div style={{justifyContent:"center",backgroundColor:"white"}}>
                <NavBar1 />
            
                <nav class="navbar navbar-light bg-light" style={{paddingLeft:"500px"}}>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                           </form>
                         </nav>
               
                
                    <CardList />
            </div>
            
        )
    }
}

export default EventsDetail
