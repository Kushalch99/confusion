import React, { Component } from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap'

class MenuComponent extends Component {
    constructor(props) {
        super(props)
    
    }
   

   
    componentDidMount(){
        console.log("component did mount invoked");
    }
    render() {
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>
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
                
            </div>
        )
    }
}

export default MenuComponent
