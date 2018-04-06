import React, { Component } from 'react';
import Result from './Result';
import { Dropdown, Form } from 'semantic-ui-react';

class NewResults extends Component {
    state = {}
    
    componentDidMount() {

    }

    render() { 
        const resultComponents = this.props.data.map((result, index) => {
            return <Result
                name={result.organizationname}
                phone={result.phone}
                key={index}
                id={index}
                data={result}/>;
        });
    
        const options = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"];

        return (
            
            <div>
                <div className="row result-header">
                    <div className="md-6 lg-6 col">
                        Organization
                    </div>

                    <div className="md-3 lg-3 col">
                        Phone
                    </div>

                    <div className="md-2 lg-2 col">
                        <div className="filter">
                            Filter
                        </div>
                    </div> 
                </div>
                <div>
                    {resultComponents}
                </div>
            </div>
        )
    }
};

export default NewResults;