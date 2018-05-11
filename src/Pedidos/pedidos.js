import React, { Component } from 'react';
import  objPedidosController  from '../pedidosController';
import { observer } from 'mobx-react';
import data from '../firebaseController';
//import { Redirect} from 'react-router-dom';
import '../App.css';

class Pedidos extends Component{
    constructor(){
        super()
        this.PedidosTotal = [];
        this.listaPedidos = [];
        this.listaPedidosBebidas = [];

    }

    state = {
        redirect: false
      }

    confirmarPedido()
        {
            var objPlatillos = {};
           /* var objBebidas = {};
            var objTotal = {};*/
            var cont = 0;
            objPedidosController.listadoPlatillos.forEach((value, index)=>{
                if(value.cantidad != 0){
                    cont++;
                    objPlatillos['nombrePlatillo'+cont] = value.nombre;
                    objPlatillos['cantidadPlatillo'+cont] = value.cantidad;
                    objPlatillos['subtotalPlatillo'+cont] = value.precio*value.cantidad;
                    objPlatillos['contadorPlatillos'] = cont;
                   /* this.PedidosTotal.push(
                       {platillo: value.nombre, cantidadPlt: value.cantidad, SubotalPlt:value.precio*value.cantidad}
                    );*/
                }
            });
            objPedidosController.listadoBebidas.forEach((value, index)=>{
                if(value.cantidad != 0){
                    cont++;
                    objPlatillos.nombreBebida = value.nombre;
                    objPlatillos.cantidadBebida = value.cantidad;
                    objPlatillos.subtotalBebida = value.precio*value.cantidad;
                    /*this.PedidosTotal.push(
                        {bebida: value.nombre, cantidadBeb: value.cantidad, SubotalBeb:value.precio*value.cantidad}
                    );*/
                }
            });
            objPlatillos.total = objPedidosController.total;
           // this.PedidosTotal.push({total: objPedidosController.total});
           this.PedidosTotal.push({objPlatillos});
           console.log(objPlatillos)

         
            //guardar en firebase
           data.pedidos.push({pedido: this.PedidosTotal})
            .then(
                function(){
                    alert('se ha guardado el pedido');
                    window.location.href='/';
                    // this.setState({ redirect: true });
                }  
            )
            .catch(
                function(error){
                    alert('ha ocurrido u error' + error);
                }
            )

            //fecha y hora
            var d = new Date();
            var months = ['01','02','03','04','05','06','07','08','09',10,11,12];
            var fechaTicket = d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear();
            var horaTicket = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();          
           
           
            this.printElem(fechaTicket, horaTicket);
            
        }

    printElem(fecha, hora) {
            var content = document.getElementById('printPedido').innerHTML;
            var mywindow = window.open('', 'Print', 'height=400,width=600');

            mywindow.document.write("<link rel=\"stylesheet\" href=\"./app.css\" type=\"text/css\"  media=\"print\"/>");
            mywindow.document.write('<html><head><title>Print</title>');
            mywindow.document.write('<h2>Menú de comidas</h2>');
            mywindow.document.write(`<b>Fecha:</b>${fecha} <b>Hora:</b> ${hora}`);
            mywindow.document.write('<hr/>');
            mywindow.document.write('</head><body >');
            mywindow.document.write(content);
            mywindow.document.write('<p>Gracias por su compra! ☺</p>');
            mywindow.document.write('</body></html>');
        
            mywindow.document.close();
            mywindow.focus()
            mywindow.print();
            mywindow.close();
            return true;
    }

    cancelarPedido(){
        alert('Pedido cancelado');
        window.location.href='/';
    }

    render(){
        let listaPedidos = [];
        let listaPedidosBebidas = [];


        objPedidosController.listadoPlatillos.forEach((value, index)=>{
            if(value.cantidad != 0){
                    listaPedidos.push(  
                        <tr key={ index }>
                            <td>
                                { value.nombre }
                            </td>
                            <td>
                                {value.cantidad }
                            </td>
                            <td>
                                { value.cantidad*value.precio }
                            </td>
                        </tr>  
                    );
              } 
        });
        objPedidosController.listadoBebidas.forEach((value, index)=>{
                if(value.cantidad != 0 ){
                    listaPedidosBebidas.push(
                        <tr key={ index }>
                            <td>
                                { value.nombre }
                            </td>
                            <td>
                                {value.cantidad }
                            </td>
                            <td>
                                { value.cantidad*value.precio }
                            </td>
                         </tr>  
                    );
                }
                      
            }
            
        );

        /*var btnPedido = this.refs.btnGuardarPedido;

        if(objPedidosController.total == 0){
            console.log(btnPedido.style.display = "none");
        }*/

        const Button = props => {
            const { kind, ...other } = props;
            const style = kind === 0 ? {display: 'none'} : { display: 'block' };
            return <button style={style} {...other}/>;
        };

        return(
            <div className="col-md-5 bg-warning">
                <h2> + Pedidos </h2>
               <div id="printPedido">
                     <table className="table" style={{width: '100%'}}> 
                        <thead>
                        <tr style={{textAlign: 'left'}}>
                            <th>Descrip</th>
                            <th>Cant</th>
                            <th>Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                           { listaPedidos }
                           { listaPedidosBebidas }
                        </tbody>
                    </table>
                    <b>TOTAL $:</b> { objPedidosController.total } 
                    <hr/>
               </div>
                <div className="row">
                    <Button  kind={objPedidosController.total} className="btn  btn-default pull-left" onClick={this.confirmarPedido.bind(this)}>
                        Guardar Pedido
                    </Button>
                    <Button kind={objPedidosController.total} className="btn  btn-default pull-right"  onClick={this.cancelarPedido.bind(this)}>
                        cancelar
                    </Button>
                </div>
                
            </div>
           
        );
    }
}

export default observer(Pedidos)