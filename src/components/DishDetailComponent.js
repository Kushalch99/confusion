import React,{Component} from 'react'
import {  Card, CardImg,  CardTitle, CardText, CardBody, ListGroup, ListGroupItem, Breadcrumb,BreadcrumbItem, ModalHeader, ModalBody} from 'reactstrap'
import {Link} from 'react-router-dom';
import {Modal,Button,Row,Label,Col} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
             isOpen:false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal(event){
        this.setState({
            isOpen:!event.target.isOpen
        })
    }
    handleSubmit(values){
        
        this.setState({
            isOpen:!this.state.isOpen
        })
        this.props.addComment(this.props.dishId,values.rating,values.name,values.comment);
    }
    
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="Rating" md={5}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={10}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" name="name" className="form-control" 
                                    validators={{
                                        required,minLength:minLength(3),maxLength:maxLength(15)
                                    }}/>
                                    <Errors 
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required:'Required',
                                    minLength: ' Must be greater than 2 char',
                                    maxLength: ' Must be less than 15 char'
                                }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={10}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment" rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit"  color="primary">Submit</Button>
                        </LocalForm>              
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


function RenderComment({comments,addComment,dishId}){
      
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
                    <CommentForm dishId={dishId} addComment={addComment}/>
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
    

    
    
    const DishDetailComponent = ({dish,comments,addComment})=> {
        if(dish!=null){
        // console.log(Comments);
        return( 
        <div className="container">
             <Breadcrumb>
                        
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {dish.name}
                        </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
            <div className="row">
                <RenderDish dish={dish} /> 
                <RenderComment comments={comments} 
                    addComment={addComment}
                    dishId={dish.id}/>
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
