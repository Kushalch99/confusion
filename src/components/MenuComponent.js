import React from 'react'
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap'

    function RenderMenuItem({dish,onClick}){
        return(
            <Card onClick={()=> onClick(dish.id)}>
            <CardImg width="100%"src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                 <CardTitle>{dish.name}</CardTitle>
             </CardImgOverlay>
         </Card>
        )
    } 

    const MenuComponent = ({dishes,onClick}) =>{
        const menu = dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={onClick} /> 
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {menu}
                 </div>
            </div>
        )

    }
      


export default MenuComponent
