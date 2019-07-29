 var filas = 0;
 var columnas = 0;
 var matriz = new Array();
 
document.getElementById("btnGenerar").addEventListener("dblclick", crear);

function crear(){
    filas =document.getElementById("filas").value
    columnas = document.getElementById("columnas").value
    matriz=new Array(columnas);
    var a=0;
    for (i = 0; i < filas; i++){
        matriz[i] = new Array(columnas);
    }
    for(i=0; i<filas; i++){
        for (e=0; e < columnas; e++){
            matriz[i][e] = a;
            a++;
        }
    }
    document.write("<table border=1>")
    for (i=0; i < filas; i++){
        document.write("<tr>");
        for (e=0; e < columnas; e++){
            document.write("<td>"+matriz[i][e]+"</td>");
        }
        document.write("<tr>")
    }
    document.write("</table")
    return filas, columnas, matriz;
}

function ImprimirFilas(){
    document.write("</table>Imprimir Filas<br>");
    document.write("<table border=1>")
    for(i=0; i<filas ; i++){
        document.write("<tr>");
        document.write("<td>"+matriz[i]+"</td>");
        document.write("<tr>")
        console.log(matriz[i]);
    }
}

function ImprimirColumnas(){
    document.write("</table>Imprimir Columnas<br><br>");
    for (i=0; i < columnas; i++){
        for (e=0; e < filas; e++){
            document.write(matriz[e][i]+"  ");
            console.log(matriz[e][i]);
        }
        document.write("<br><br>")
    }
}

function ImprimirTodo(){
    document.write("</table>Imprimir Matriz Completa<br>");
    document.write("<table border=1>")
    for (i=0; i < filas; i++){
        document.write("<tr>");
        for (e=0; e < columnas; e++){
            document.write("<td>"+matriz[i][e]+"</td>");
        }
        document.write("<tr>")
    }
    document.write("</table")
    console.log(matriz)
}


