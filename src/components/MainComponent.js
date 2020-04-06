import React, { Component } from 'react';

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetailComponent from './DishDetailComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ContactComponent from "./ContactComponent";
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';

class MainComponent extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
      //  selectedDish: null
    };
  }
  
  render(){
      const HomePage = () =>{
          return (
              <HomeComponent dish={this.state.dishes.filter((dish) => dish.featured )[0]} 
              promotion = {this.state.promotions.filter((promo) => promo.featured)[0]} 
              leader = {this.state.leaders.filter((leader) => leader.featured)[0]} />

          )
      }

      const DishWithId = ({match}) =>{
          return (
          <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
          />
          );
      }
    return (
    <div >
      <HeaderComponent />
      <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
            <Route exact path="/contactus"><ContactComponent /></Route>
            <Route path="/menu/:dishId" component = {DishWithId} />
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
