import React, { Component } from 'react';
import AboutComponent from './AboutComponent'
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ContactComponent from "./ContactComponent";
import { connect } from 'react-redux';
import { postComment,fetchDishes,fetchComments,fetchPromos } from '../Redux/ActionCreators'
import { comment } from '../Redux/comment';
import {actions} from 'react-redux-form';

const mapStateToProps = (state) =>{
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }   
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes:()=> {dispatch(fetchDishes())},
  resetFeedbackForm: ()=> {dispatch(actions.reset('feedback'))},
  fetchComments:()=> {dispatch(fetchComments())},
  fetchPromos:()=> {dispatch(fetchPromos())},

})

class MainComponent extends Component{
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render(){
      const HomePage = () =>{
          return (
              <HomeComponent dish={this.props.dishes.dishes.filter((dish) => dish.featured )[0]} 
              dishesLoading = {this.props.dishes.isLoading}
              dishesErrMess = {this.props.dishes.errMess}
              promotion = {this.props.promotions.promotions.filter((promo) => promo.featured)[0]} 
              promosLoading = {this.props.promotions.isLoading}
              promosErrMess = {this.props.promotions.errMess}
              leader = {this.props.leaders.filter((leader) => leader.featured)[0]} />

          )
      }

      const DishWithId = ({match}) =>{
          return (
          <DishDetailComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading = {this.props.dishes.isLoading}
            ErrMess = {this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}
            CommentsErrMess = {this.props.comments.errMess}
            postComment = {this.props.postComment}
          />
          );
      }
    return (
    <div >
      <HeaderComponent />
      <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} />
            <Route exact path="/contactus"><ContactComponent resetFeedbackForm={this.props.resetFeedbackForm}/></Route>
            <Route path="/menu/:dishId" component = {DishWithId} />
            <Route path="/aboutus"><AboutComponent  leaders={this.props.leaders}/></Route>
            <Redirect to="/home/" />    
      </Switch>
      {/* <MenuComponent dishes={this.state.dishes} onClick={(dishId)=> {this.onDishSelect(dishId)}}/> */}
      {/* <DishDetailComponent selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
      <FooterComponent />  
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));
