import React from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'

function RenderComment({comments}){
      
    const COM = comments.map((K)=>{
         
                  
       return(
           <ListGroupItem>
               <p>{K.comment}</p>
               <p>--{K.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(K.date)))}</p>
           </ListGroupItem>
       );
      });

      if(comments!=null)
        return(

            <div className="col-12 col-md-5 m-1">
                <Card>
                    <h4>Comments</h4>
                    <ListGroup className="list-unstyled">
                        {COM}
                    </ListGroup>
                </Card>
            </div>
            );
     else{
         return <div></div>
     }
  
}
    

function RenderDish({dish}){
        if(dish!=null){
            return(
            
                    
                       <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%"src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                
                        </div>
                
                       
        
               
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    

    
    
    const DishDetailComponent = (props)=> {
        if(props.selectedDish!=null){
        // console.log(Comments);
        return( 
        <div className="container">
            <div className="row">
                <RenderDish dish={props.selectedDish} /> 
                <RenderComment comments={props.selectedDish.comments} />
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

export default DishDetailComponent
