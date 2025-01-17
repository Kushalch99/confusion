import React from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({dish}){
        return(
            <Link to = {`menu/${dish.id}`}>
            <Card>
            <CardImg width="100%"src={baseUrl + dish.image} alt={dish.name}/>
            <CardImgOverlay>
                 <CardTitle>{dish.name}</CardTitle>
             </CardImgOverlay>
         </Card>
         </Link>
        )
    } 

    const MenuComponent = ({dishes}) =>{
        const menu = dishes.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} /> 
                </div>
            );
        });

        if(dishes.isLoading){
            return(
                <div className="container">
                    <div className="Row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(dishes.ErrMess){
            return(
                <div className="container">
                    <div className="Row">
                        <h4>{dishes.ErrMess}</h4>
                    </div>
                </div>
            );
        }
        else{
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                 </div>
            </div>
        )
        }
    }
      


export default MenuComponent
