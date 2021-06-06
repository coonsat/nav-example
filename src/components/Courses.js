import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

//Internal components
import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, JSCourses, CSSCourses} from '../data/courses';

//when you render a component with a route you get additional information
//including the path name and the path URL the route is matching
//enter the component name in the browser and look at the component
//we're accessing the data from inside the component being rendered by routes
//What we're doing here is have our courses dynamically match our paths 
const Courses = ({ match }) => {

    return(
        <div className="main-content courses">
            <div className="course-header group">
                <h2>Courses</h2>
                <ul className="course-nav">
                    <li>
                        {/* access match object url and put this in the NavLink */}
                        {/* Component removed because we can redirect using Route & Render */}
                        {/* The CourseContainer takes care of the rendering */}
                        {/* <NavLink to={`${match.url}/html`} component={HTML} ></NavLink> */}
                        <NavLink to={`${match.url}/html`}>HTML</NavLink>
                    </li>
                    <li>
                        {/* <NavLink to={`${match.url}/css`} component={CSS} ></NavLink> */}
                        <NavLink to={`${match.url}/css`}>CSS</NavLink>
                    </li>
                    <li>
                        {/* <NavLink to={`${match.url}/javascript`} component={Javascript} ></NavLink> */}
                        <NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
                    </li>
                </ul>
            </div>

            {/* Keep active while clicking in other fields*/}
            {/* When clicking on courses again the content disappears */}
            {/* Solution is to override  the existing courses route and render a redirect component */}
            {/* <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`} />} />
            <Route path={`${match.path}/html`} component={HTML}/>
            <Route path={`${match.path}/css`} component={CSS}/>
            <Route path={`${match.path}/javascript`} component={Javascript}/> */}
            {/* Even if we change our paths and url down the road, our nav links in the routes will always render correctly  */}

            {/* New method whereby we create a course container that handles all types of courses */}
            {/* We just pass in the values from this component */}
            <Route  exact path={match.path} 
                    render={ () => <Redirect to={`${match.path}/html`} />} />

            <Route  path={`${match.path}/html`} 
                    render={ () => <CourseContainer data={CSSCourses} /> } />

            <Route  path={`${match.path}/css`} 
                    render={ () => <CourseContainer data={HTMLCourses} /> } />

            <Route  path={`${match.path}/javascript`} 
                    render={ () => <CourseContainer data={JSCourses} />}/>
        </div>
    );

};

export default Courses;