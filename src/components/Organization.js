
import React, { Component } from 'react';

class Organization extends Component {
    state = {}
    
    
    render() { 
        const url = window.location.pathname.toString().split("/");
        const index = parseInt(url[url.length - 1]);
        const result = this.props.data[index];
        
        const {brooklyn, bronx, queens, staten_island, manhattan} = result;
        
        return (
            <div className="organization">
                <h5>{result.organizationname}</h5>
                <hr/>
                <p>{result.description}</p>
                <hr/>
                <h5>Boroughs</h5>
                <ul> 
                    <li>Brooklyn: {brooklyn}</li>
                    <li>Bronx: {bronx}</li>
                    <li>Manhattan: {manhattan}</li>
                    <li>Staten Island: {staten_island}</li>
                    <li>Queens: {queens}</li>
                </ul>
                <h5>Contact</h5>
                <ul>
                    <li>Phone: {result.phone}</li>
                    <li>Website: <a href={result.url}>{result.url}</a></li>
                </ul>

                <h5>Services</h5>
                <ul> 
                    <li>Disabilities: {result.disabilites}</li>
                    <li>Health: {result.health}</li>
                    <li>Homelessness: {result.homelessness}</li>
                    <li>Veterans: {result.veterans_military_families}</li>
                    <li>LGBT: {result.lesbian_gay_bisexual_and_or_transgender}</li>
                </ul>

                <div className="btn">Save Info</div>
            </div>
        )
    }
}
 
export default Organization;