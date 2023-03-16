import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Logout from './components/Logout';
import Homepage from './components/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    // document.body.backgroundColor = 'black';
    this.state = {

      loader: false,

    }
  }
  componentDidMount() {
   const isLoggedIn =  localStorage.getItem('userInfo')
   if(isLoggedIn){
    this.setState({ loader : true })
   }
  }

  render() {
    return (
      <>
        <Router>
          {<Navbar />}
          <Routes>
            {/* key is given in every element because, if not given the news component will render only one once and second time it will  not render bcoz it has been rendered, so just to make each element unique we have put key in each element  */}
            <Route path="/" element={!this.state.loader && <Homepage></Homepage>} ></Route>
            <Route path="/general" element={this.state.loader && <News pageSize={9} key="general" country='in' category='general' />}></Route>
            <Route path="/business" element={this.state.loader &&  <News pageSize={9} key="business" country='in' category='business' />}></Route>
            <Route path="/science" element={this.state.loader &&  <News pageSize={9} key="science" country='in' category='science' />}></Route>
            <Route path="/sports" element={this.state.loader &&  <News pageSize={9} key="sports" country='in' category='sports' />}></Route>
            <Route path="/entertainment" element={this.state.loader &&  <News pageSize={9} key="entertainment" country='in' category='entertainment' />}></Route>
            <Route path="/health" element={this.state.loader &&  <News pageSize={9} key="health" country='in' category='health' />}></Route>
            <Route path="/technology" element={this.state.loader &&  <News pageSize={9} key="technology" country='in' category='technology' />}></Route>
            <Route path="/logout" element={this.state.loader &&  <Logout/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}
