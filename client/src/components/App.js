import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from 'react-redux';
import * as actions from '../actions';
// const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//Even if we add something like
// <Route path="/surveys" component={SurveyNew}
// when we visit the domain.com/surverys, we will see both Landing and Surveys because the initial route string "/" is present in the "/surveys" type.

//BrowserRouter expects atmost one child only
//exact = {True} and exact is same in JSX

//webpack is module loader - takes all javascript files and condense it into one file
export default connect(null, actions)(App);

//now all the actions components are assigned to App component as props
