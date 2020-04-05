import React, { Component } from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap'
import DishDetailComponent from './DishDetailComponent'

class MenuComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedDish:null
        }
        console.log("constructor is invoked");
    }
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        });
    }

   
    componentDidMount(){
        console.log("component did mount invoked");
    }
    render() {
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> {this.onDishSelect(dish)}}>
                       <CardImg width="100%"src={dish.image} alt={dish.name}/>
                       <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                 </div>
                 {/* <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                 </div> */}
                 <DishDetailComponent selectedDish={this.state.selectedDish}/>
            </div>
        )
    }
}

export default MenuComponent
