import React from 'react';

import './App.css';
import './css/style.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import $ from 'jquery'; 

import Header from './components/Header'
import Card from './components/Card'
import Inscrição from './components/Inscrição'
import SliderMain from './components/SliderMain'
import Footer from './components/Footer'






export default props =>
<div  className="app">
    <Header />
    <Card   />
    <Inscrição />
    <SliderMain />
    <Footer />
</div>