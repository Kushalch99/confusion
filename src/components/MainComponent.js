import React, { Component } from 'react';

import MenuComponent from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetailComponent from './DishDetailComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';


class MainComponent extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       dishes: DISHES,
       selectedDish: null
    };
  }
  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId
    }); 
    
    }  
  render(){
    return (
    <div >
      <HeaderComponent />
      <MenuComponent dishes={this.state.dishes} onClick={(dishId)=> {this.onDishSelect(dishId)}}/>
      <DishDetailComponent selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      <FooterComponent />  
    </div>
  );
  }
}

export default MainComponent;
