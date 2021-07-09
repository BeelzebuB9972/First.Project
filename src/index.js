import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/fontawesome';

import Scroll from "./scrollToTop";
import HomeComp from './components/home_page'
import Product from './components/product/product'
import TopSection from './components/top_section/top_section';
import SearchNav from './components/search_nav/search_nav';
import FeaturedProducts from './components/featured_products/featured_products'
import Signup from './components/signup/signup'
import Footer from './components/footer/footer'
import Toast from './components/toast/toast'

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Scroll/>
    <TopSection />
    <SearchNav />
    <Switch>
      <Route exact path="/" render={()=>HomeComp()}/>  
      <Route exact path="/home" render={() => (<Redirect to="/" />)}/>
      <Route exact path="/product/:produtInfo" render={params=><Product params={params}/>}/>
    </Switch>
    <FeaturedProducts />
    <Signup />
    <Footer />
    <Toast/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
