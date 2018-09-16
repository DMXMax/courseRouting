import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Course from '../Course/Course';
import courseList from '../../courseList';

import './Courses.css';

class Courses extends Component {
    state = {
        courseList
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courseList.map( course => {
                            return <NavLink key={course.id} to={'/course/'+course.id} ><article className="Course" 
                            >{course.title}</article></NavLink>;
                        } )
                    }
                </section>
                <Route path="/course/:id" component={Course}/>
               
            </div>
        );
    }
}

export default Courses;