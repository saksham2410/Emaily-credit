import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';
// const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
    <BrowserRouter>
    <div>
    <Header />
    <Route exact path='/' component={Landing} />
    <Route exact path="/surveys" component={Dashboard} />
    <Route exact path="/surveys/new" component={SurveyNew} />
    </div>
    </BrowserRouter>
    );
};

//Even if we add something like
// <Route path="/surveys" component={SurveyNew}
// when we visit the domain.com/surverys, we will see both Landing and Surveys because the initial route string "/" is present in the "/surveys" type.

//BrowserRouter expects atmost one child only
//exact = {True} and exact is same in JSX

//webpack is module loader - takes all javascript files and condense it into one file

export default App;
