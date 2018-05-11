import React, { Component } from 'react';
import objPedidosCtr from '../pedidosController';
import { observer } from 'mobx-react';
import ReactDOM from 'react-dom';
//import objPedidosController from '../pedidosController';

class ListadoPedidos extends Component{
    constructor(){
        super();
    }

   /* componentDidMount(){
        console.log(this.ref.innerHTML  = 'hola')
        console.log(ReactDOM.findDOMNode(this).innerHTML);
    }*/
   
    render(){
        let listadoPedidos = [];
        let divListadoPedidos;
        let cont = 0;


        /*divListadoPedidos = objPedidosCtr.listadoPedidos.forEach(
            (value, index)=>{
                
                    for(let i=1; i<=value.contadorPlatillos; i++){
                        // if(value['nombrePlatillo'+i] != undefined){
                            // platillos += value['nombrePlatillo'+i] + '.'.repeat(50 - value['nombrePlatillo'+i].length) +'X'+value['cantidadPlatillo'+i]+"\r\n";
                             platillos += `${value['nombrePlatillo'+i]} ${'.'.repeat(50 - value['nombrePlatillo'+i].length)} X ${value['cantidadPlatillo'+i]} \n`;
                            
                        // }

                        listadoPedidos.push(
                            <div key = {index} className="col-md-6">
                             
                                  { value['nombrePlatillo'+i] + '.'.repeat(50 - value['nombrePlatillo'+i].length) +'X' + value['cantidadPlatillo'+i] }
                                  <br/>{value.total} 
                            </div>
                          
                         )
                    }         
        });*/

        /*for(let v of objPedidosController.listadoPedidos){
            listadoPedidos.push(
                <li>
                    { v.cantidadPlatillo1 }
                </li>);
        }*/
       divListadoPedidos = objPedidosCtr.listadoPedidos.forEach(
            (value, index)=>{
                for(var i=0; i<value.length; i++){
                    if(value[i].platillo != undefined){
                        function repeat(){
                            let dif = 50 - value[i].platillo.length;
                            return '.'.repeat(dif)
                        }
                        listadoPedidos.push(
                            <div key={cont++}>
                                {value[i].platillo + repeat() + 'X' + value[i].cantidadPlt + repeat() + '$' + value[i].SubotalPlt}
                            </div>
                        )
                    }
   
                    if(value[i].bebida != undefined){
                        listadoPedidos.push(
                            <div key={cont++}>
                                {value[i].bebida + '.'.repeat(50 - value[i].bebida.length) + 'X' + value[i].cantidadBeb + '.'.repeat(50 - value[i].bebida.length) + '$'+ value[i].SubotalBeb}
                            </div>
                        )
                    }
                    if(value[i].total != undefined){
                        listadoPedidos.push(
                            <div key={cont++}>
                                <b>TOTAL:$ {value[i].total}</b>
                                <hr/>
                            </div>
                        )
                    }
                }
               
            });

           // console.log(preListadoPedidos);
           /* function makeid(){
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
              
                for (var i = 0; i < 5; i++)
                  text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }*/
             
            return(
                    <div className="col-md-7">
                        <h4>Listado pedidos</h4>
                            <hr/>
                            <div className="col-md-12">
                                { listadoPedidos }
                            </div>
                    </div>
            )

    }
}

export default observer(ListadoPedidos) 