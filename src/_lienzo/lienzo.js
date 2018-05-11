import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Platillos from '../platillos/platillos'
import Bebidas from '../bebidas/bebidas'
import Pedidos from '../Pedidos/pedidos';
import ListadoPedidos from '../Pedidos/listadoPedidos';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import logo from '../logo.svg';

class Lienzo extends Component{
    render(){
        return(
            <div className="container">
            <hr/>
                <div className="jumbotron">
                  <h1>Menú de comidas</h1>             
                </div>
                <div className="row">
                <BrowserRouter>
                  <div>
                            <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                  <img className="navbar-brand" src={logo}/>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li><Link to="/" className="active"> Home </Link></li>
                                    <li><Link to="/platillos"> Platillos </Link></li>
                                    <li><Link to="/bebidas">Bebidas</Link></li>
                                    <li><Link to="/listado-pedidos">Listado pedido</Link></li>
                                </ul>
                            </div>
                            </nav>
                            
                            
                            <Route path="/platillos" component={Platillos}/>
                            <Route exact path="/bebidas" component={Bebidas}/>
                            <Route exact path="/listado-pedidos" component={ListadoPedidos}/>
                   </div>
                </BrowserRouter>
                <Pedidos/>
                </div>
            </div>
            
        )
    }
}

export default Lienzo