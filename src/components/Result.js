import React from 'react';
import { Link } from 'react-router-dom';

const Result = (props) => {
    
    return (
        <div className="result">
            <div className="row result-card">
                <div className="md-6 lg-6 col">
                    {props.name}
                </div>

                <div className="md-3 lg-3 col">
                    {props.phone}
                </div>

                <div className="md-2 lg-2 col">
                    <div className="btn">
                    <Link to={`/organizations/${props.id}`}>
                        See Info
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Result;