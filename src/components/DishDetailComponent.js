import React, { Component } from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'

class DishDetailComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }
    
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                   <CardImg width="100%"src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
                </div>
            
                    <div className="col-12 col-md-5 m-1">
                <Card>
                <h4>Comments</h4>
                <ListGroup className="list-unstyled">
                    {this.renderComment(dish.comments)}
                </ListGroup>
                
                </Card>
            
                </div>
                </div>                
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
   renderComment(comments){
      
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const COM = comments.map((K)=>{
            var mydate = new Date(K.date);
            var m = month[mydate.getMonth()];
            var d = mydate.getDate();
            var str = m + ' ' + d + "," + mydate.getFullYear();       
        return(
            <ListGroupItem>
                <p>{K.comment}</p>
                <p>--{K.author},{str}</p>
            </ListGroupItem>
        );
       });
        console.log(comments);
        return(
         COM   
        );
   
}
    
    
    render() {
    
        // console.log(Comments);
        return( 
        <div>
            <div>
                {this.renderDish(this.props.selectedDish)}
            </div>
    
           
        </div>
        );
    }
}

export default DishDetailComponent
