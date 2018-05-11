import React, { Component } from 'react';

class OrdenarBebida extends Component{

    cantidadBebida(event){
        this.props.OrdenarBebida(event.target.value, this.props.indice);
    }
    render(){
        return(
            <div>
                <div className="text-right">
                  <b> Precio $: {this.props.precio }</b>
                   <hr/>
                  <b> Cantidad:</b><input type="number" min="0" max="10" onChange={this.cantidadBebida.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default OrdenarBebida