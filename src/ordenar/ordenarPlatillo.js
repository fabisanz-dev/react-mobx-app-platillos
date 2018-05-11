import React, { Component } from 'react';


class OrdenarPlatillo extends Component{
    cantidadOrdenada(event){
        this.props.cantidadPedidos( event.target.value, this.props.index );
    }

    render(){
        return(
            <div>
                <div className="text-right">
                    <b> Precio $:</b>{ this.props.precio }
                <hr/>
                     Cantidad: <input type="number" min="0" max="20" onChange={ this.cantidadOrdenada.bind(this) }/>
                </div>  
            </div>                           
        );
    }
}

export default OrdenarPlatillo