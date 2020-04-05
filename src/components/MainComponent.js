import React, { Component } from 'react';

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetailComponent from './DishDetailComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from './HomeComponent';


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
      const HomePage = () =>{
          return (
              <HomeComponent />
          )
      }
    return (
    <div >
      <HeaderComponent />
      <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
            <Redirect to="/home/" />    
      </Switch>
      {/* <MenuComponent dishes={this.state.dishes} onClick={(dishId)=> {this.onDishSelect(dishId)}}/> */}
      {/* <DishDetailComponent selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
      <FooterComponent />  
    </div>
  );
  }
}

export default MainComponent;
