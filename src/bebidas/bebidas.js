import React, { Component } from 'react';
import objPedidosController from '../pedidosController';
import { observer } from 'mobx-react';
import OrdenarBebida from '../ordenar/ordenarBebida';


class Bebidas extends Component{
    render(){
        let listadoBebidas = [];
     
        objPedidosController.listadoBebidas.forEach( 
            (value, index) => {
                listadoBebidas.push(
                    <li className="list-group-item" key={ index }>
                      { value.nombre }<br/>
                      <div className="row">
                        <div className="col-md-4">
                            <div className="pull-left">
                               <img src={value.imagen} alt="img_bebida" width="50" height="50"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <OrdenarBebida 
                            precio={ value.precio }
                            indice={ index }
                            OrdenarBebida={(cantidad_bebida, indice_bebida)=>{
                                    objPedidosController.cantidadPedidosBebidas(cantidad_bebida, indice_bebida)
                                } 
                            }
                            />
                        </div>
                      </div>

                    </li>
                )
            }
        );
        
        return(
                <div>
                    <div className="col-md-7">
                        <h2>Bebidas</h2>
                        <ul className="list-group">
                            { listadoBebidas }
                        </ul>
                    </div>
                </div>    
        );
    }
}
export default observer(Bebidas)