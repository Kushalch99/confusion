import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { Navbar, NavbarBrand } from 'reactstrap';

class HeaderComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con fusion</h1>
                                <p>We take inspirations from world's best cuisines, and create a unique fusion experience.Our lipsmacking creation will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default HeaderComponent
