import React, { Component } from 'react';

import  HeroImage from './HeroImage';
import Card from './Card';

import '../styles/home.css';

const buttons=[{name:'Menu', link:'/menu'},{name:'Recipies', link:'/recipies'},{name:'Build', link:'/build'},{name:'Shopping List', link:'/shopping-list'}];
class Home extends Component {
    
    renderMenuOptions(){
        return buttons.map((button)=>{
            return <Card name={button.name} link={button.link}/>
        });
    }
    render(){
        return (
            <div className="home">
                <HeroImage image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=900&q=60"/>
                <div className="home-buttons">
                    {this.renderMenuOptions()}
                </div>
            </div>
        )
    }
}

export default Home;