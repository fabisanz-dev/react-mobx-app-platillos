import React, { Component } from 'react';
import { observer } from 'mobx-react';
import objPedidosController from '../pedidosController';
import OrdenarPlatillo from '../ordenar/ordenarPlatillo';


class Platillos extends Component{
    render(){
       let listaPlatillos = [];

       objPedidosController.listadoPlatillos.forEach(
            (value, index)=>{
                listaPlatillos.push(
                                    <li className="list-group-item" key={ index }>
                                        <b>{ value.nombre }</b> <br/>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="pull-left">
                                                    <img src={value.linkImg} alt="img_platillo" width="50" height="50"/>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <OrdenarPlatillo precio={ value.precio }
                                                index={ index }
                                                cantidadPedidos={(pedidos_cantidad, pedidos_index)=>{
                                                    objPedidosController.cantidadPedidos(pedidos_cantidad, pedidos_index);
                                                }}/> 
                                            </div>
                                        </div>
                                        <br/>   
                                    </li>
                                    );
        
            }
        
        );

        return(
                <div>                 
                    <div className="col-md-7">
                        <h2>Platillos</h2>
                        <ul className="list-group">
                            { listaPlatillos }
                        </ul> 
                    </div>
                </div>
        );
    }
}

export default observer(Platillos)