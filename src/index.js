import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/fontawesome';

import TopSection from './components/top_section/top_section';
import Search from './components/search_nav/search_nav';
import Carousel from './components/carousel/carousel';
import Features from './components/features/features';
import TrendTabs from './components/trend_tabs/trend_tabs'
import BestSellers from './components/best_sellers/best_sellers'
import TopCategories from './components/top_categories/top_categories'
import FeaturedProducts from './components/featured_products/featured_products'

ReactDOM.render(
  <React.StrictMode>
    <TopSection />
    <Search />
    <Carousel />
    <Features />
    <TrendTabs />
    <BestSellers />
    <TopCategories />
    <FeaturedProducts />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
