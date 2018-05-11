import {extendObservable} from 'mobx';
import data from './firebaseController';

class PedidosController{
    constructor(){
        var that = this;

        data.bebidas.on('value',
            function(snapshot){
                that.listadoBebidas = [];
                snapshot.forEach(
                    function(childSnapshot){
                        //let keyBebidas = childSnapshot.key;
                        let objBebidas = childSnapshot.val();
                        that.listadoBebidas.push(objBebidas);
                    }
                )  
        });

        data.platillos.on('value',
            function(snapshot){
                that.listadoPlatillos = [];
                snapshot.forEach(
                    function(childSnapshot){
                       // var keyPlatillos  = childSnapshot.key;
                        var objPlatillos = childSnapshot.val();
                        //console.log(objPlatillos)
                        that.listadoPlatillos.push(objPlatillos);
                    }
                )
            }
        );

        data.pedidos.on('value',
            function(snapshot){
                that.listadoPedidos = [];
                snapshot.forEach(
                    function(childSnapshot){
                        //var keyPedidos = childSnapshot.key;
                        var ArrPedidos = childSnapshot.val();
                       console.log(ArrPedidos.pedido)
                         that.listadoPedidos.push(ArrPedidos.pedido); 
                        
                       
                        //var obj = JSON.parse(myJsonString);
                        //console.log(that.listadoPedidos)
                       
                        /*for(let v of myJsonString){
                            console.log(v);
                        }*/
                    }
                )
            }
        );

        extendObservable(this,
            {
                listadoPlatillos:[],
                listadoBebidas:[],
                total: 0,
                listadoPedidos:[],
                pedidosTotal:0,
            }   
        );
        
 
    }

    cantidadPedidos(pedido_cantidad, pedido_index){
        this.listadoPlatillos.forEach( (value, index)=>{
            if(pedido_index === index){
                this.listadoPlatillos[pedido_index].cantidad = pedido_cantidad;
            }
        });
        
        this._total();
    }
    

    cantidadPedidosBebidas(bebida_cantidad, bebida_index){
        this.listadoBebidas.forEach( (value, index)=>{
                if(bebida_index === index){
                    this.listadoBebidas[bebida_index].cantidad = bebida_cantidad;
                }
            }
        )
        
        this._total();
    }

    _total(){
        var sumPlat = 0;
        var sumBeb = 0;

        for(let value of this.listadoPlatillos){
            let sub = (value.cantidad*value.precio);
            sumPlat = sumPlat + sub;
        };
        for (let value of this.listadoBebidas) {
            let sub = (value.cantidad*value.precio);
            sumBeb = sumBeb + sub;
          }
        this.total = sumPlat + sumBeb;
    }


}



var objPedidosController = new PedidosController;

export default objPedidosController;