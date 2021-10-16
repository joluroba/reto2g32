function consultar() {


    $.ajax(
             {
                url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type         : 'GET',
                dataType     : 'json',
                
                // success      :  function(json){
                //                     $("#idDivConsulta").empty();
                //                     for (i=0; i < json.items.length; i++){
                //                         $("#idDivConsulta").append(json.items[i].brand + json.items[i].category_id + json.items[i].model + json.items[i].name + " ");
                //                     }
                //                     console.log(json)
                //                 },
                // version 2
                success      :  function(json){

                    $("#idDivConsulta").empty();
                    $("#idDivConsulta").append("<table>");
                    $("#idDivConsulta").append("<caption>Bicicletas</caption>");
                    $("#idDivConsulta").append("<tr><th>ID</th><th>Bicicleta</th><th>Modelo</th><th>Categoria ID</th><th>Nombre</th></tr>");
                    for (i=0; i < json.items.length; i++){
                        $("#idDivConsulta").append("<tr>");
                        $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                        $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");   
                        $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                        $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                        $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                        $("#idDivConsulta").append('<td><button onclick="borrar('+json.items[i].id+')">Borrar</button></td>');
                        $("#idDivConsulta").append("</tr>");
                    }
                    $("#idDivConsulta").append("</table>");

                    console.log(json)
                },

                 error       :  function(xhr,status){
                                    console.log(xhr)
                                }


             }


          );
}
function consultarClient() {


    $.ajax(
             {
                url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                type         : 'GET',
                dataType     : 'json',
                
                success      :  function(json){

                    $("#idDivConsultaClient").empty();
                    $("#idDivConsultaClient").append("<table>");
                    $("#idDivConsultaClient").append("<caption>Clientes</caption>");
                    $("#idDivConsultaClient").append("<tr><th>ID</th><th>Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>");
                    for (i=0; i < json.items.length; i++){
                        $("#idDivConsultaClient").append("<tr>");
                        $("#idDivConsultaClient").append("<td>" + json.items[i].id + "</td>");
                        $("#idDivConsultaClient").append("<td>" + json.items[i].name + "</td>");   
                        $("#idDivConsultaClient").append("<td>" + json.items[i].email + "</td>");
                        $("#idDivConsultaClient").append("<td>" + json.items[i].age + "</td>");
                        $("#idDivConsultaClient").append('<td><button onclick="borrarClient('+json.items[i].id+')">Borrar</button></td>');
                        $("#idDivConsultaClient").append("</tr>");
                    }
                    $("#idDivConsultaClient").append("</table>");

                    console.log(json)
                },

                 error       :  function(xhr,status){
                                    console.log(xhr)
                                }


             }


          );
}
function consultarMessage() {

    $.ajax(
             {
                url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                type         : 'GET',
                dataType     : 'json',
                
               
                success      :  function(json){

                    $("#idDivConsultaMessage").empty();
                    $("#idDivConsultaMessage").append("<table>");
                    $("#idDivConsultaMessage").append("<caption>Mensajes</caption>");
                    $("#idDivConsultaMessage").append("<tr><th>ID</th><th>Mensaje</th></tr>");
                    for (i=0; i < json.items.length; i++){
                        $("#idDivConsultaMessage").append("<tr>");
                        $("#idDivConsultaMessage").append("<td>" + json.items[i].id + "</td>");
                        $("#idDivConsultaMessage").append("<td>" + json.items[i].messagetext + "</td>");
                        $("#idDivConsultaMessage").append('<td><button onclick="borrarMessage('+json.items[i].id+')">Borrar</button></td>');
                        $("#idDivConsultaMessage").append("</tr>");
                    }
                    $("#idDivConsultaMessage").append("</table>");

                    console.log(json)
                },

                 error       :  function(xhr,status){
                                    console.log(xhr)
                                }


             }


          );
}
function insertar() {

    var bike ={
        id :$("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()

    }

    var dataToSend= JSON.stringify(bike);
    
    $.ajax (
        {

            url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
            type         : 'POST',
            data         :  bike,
            dataType     :'json',

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(xhr,status, erroThrow){
                            console.log( xhr);

                            }


        }
    );

}
function insertarClient() {

    var cliente ={
        id :$("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()

    }

    var dataToSend= JSON.stringify(cliente);
    
    $.ajax (
        {

            url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'POST',
            data         :  cliente,
            dataType     :'json',

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(xhr,status, erroThrow){
                            console.log( xhr);

                            }


        }
    );

}
function insertarMessage() {

    var message ={
        id :$("#id").val(),
        messagetext: $("#messagetext").val()

    }

    var dataToSend= JSON.stringify(message);
    
    $.ajax (
        {

            url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'POST',
            data         :  message,
            dataType     :'json',

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(xhr,status, erroThrow){
                            console.log( xhr);

                            }


        }
    );

}
function borrar(idElemento) {
    
        var bike={
            id:idElemento
        }
    
        var datosEnvio   = JSON.stringify(bike);
    
        $.ajax (
            {
    
                url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type         : 'DELETE',
                data         :  datosEnvio,
                contentType  : 'application/json',
    
                success      :  function(response){
                                    console.log(response);
    
                                },
                error       :   function(xhr,status){
                                    console.log(xhr);
    
                                }
            }
        );
    
}
function borrarClient(idElemento) {
    
    var client={
        id:idElemento
    }

    var datosEnvio   = JSON.stringify(client);

    $.ajax (
        {

            url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );

}
function borrarMessage(idElemento) {
    
    var message={
        id:idElemento
    }

    var datosEnvio   = JSON.stringify(message);

    $.ajax (
        {

            url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );

}
function actualizar() {
    var bike ={
        id :$("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()

    }
    datosEnvio   = JSON.stringify(bike);


    $.ajax (
                {

                    url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );

    
}
function actualizarClient() {
    var client ={
        id :$("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()

    }
    datosEnvio   = JSON.stringify(client);


    $.ajax (
                {

                    url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );

    
}
function actualizarMessage() {
    var message ={
        id :$("#id").val(),
        messagetext: $("#messagetext").val()

    }
    datosEnvio   = JSON.stringify(message);


    $.ajax (
                {

                    url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        console.log(response);
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                }
            );

    
}
function consultarId() {

    var id = $("#id").val();

    $.ajax (
                {

                    url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/' + id ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                        $("#idDivConsulta").empty();
                        $("#idDivConsulta").append("<table>");
                        $("#idDivConsulta").append("<caption>Tabla de Bicicletas</caption>");
                        $("#idDivConsulta").append("<tr><th>ID</th><th>Bicicleta</th><th>Modelo</th><th>Categoria ID</th><th>Nombre</th></tr>");
                        for (i=0; i < json.items.length; i++){
                            $("#idDivConsulta").append("<tr>");
                            $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                            $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                            $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                            $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                            $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                            $("#idDivConsulta").append("</tr>");
                        }
                        $("#idDivConsulta").append("</table>");

                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
 
}
function consultarIdClient() {

    var id = $("#id").val();

    $.ajax (
                {

                    url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + id ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                        $("#idDivConsultaClient").empty();
                        $("#idDivConsultaClient").append("<table>");
                        $("#idDivConsultaClient").append("<caption>Clientes</caption>");
                        $("#idDivConsultaClient").append("<tr><th>ID</th><th>Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th></tr>");
                        for (i=0; i < json.items.length; i++){
                            $("#idDivConsultaClient").append("<tr>");
                            $("#idDivConsultaClient").append("<td>" + json.items[i].id + "</td>");
                            $("#idDivConsultaClient").append("<td>" + json.items[i].name + "</td>");
                            $("#idDivConsultaClient").append("<td>" + json.items[i].email + "</td>");
                            $("#idDivConsultaClient").append("<td>" + json.items[i].age + "</td>");
                            $("#idDivConsultaClient").append("</tr>");
                        }
                        $("#idDivConsultaClient").append("</table>");

                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
 
}
function consultarIdMessage() {

    var id = $("#id").val();

    $.ajax (
                {

                    url          : 'https://g1031d0880bc948-dbbike.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + id ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                        $("#idDivConsultaMessage").empty();
                        $("#idDivConsultaMessage").append("<table>");
                        $("#idDivConsultaMessage").append("<caption>Mensajes</caption>");
                        $("#idDivConsultaMessage").append("<tr><th>ID</th><th>Mensaje</th></tr>");
                        for (i=0; i < json.items.length; i++){
                            $("#idDivConsultaMessage").append("<tr>");
                            $("#idDivConsultaMessage").append("<td>" + json.items[i].id + "</td>");
                            $("#idDivConsultaMessage").append("<td>" + json.items[i].messagetxt + "</td>");
                            $("#idDivConsultaMessage").append("</tr>");
                        }
                        $("#idDivConsultaMessage").append("</table>");

                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
 
}

     
  
