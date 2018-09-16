import React, { Component } from 'react';
import {getTitleforId} from '../../courseList'; 


class Course extends Component {
    render () {
        return (
            <div>
                <h1>{getTitleforId(parseInt(this.props.match.params.id,10))}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id} </p>
            </div>
        );
    }
}

export default Course;