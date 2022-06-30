do{
    numero = parseInt(prompt("Ingrese un numero del 1 al 5 para saber que lugar le toca visitar"))

}while(isNaN(numero))

if(numero>5)
alert("El numero debe ser menor o igual a 5")


switch(numero){
    case 0:
        alert("Usted cancelo la visita");
    break;
    case 1:
    alert("Su lugar a visitar es San Telmo");
    break;
    case 2:
    alert("Su lugar a visitar es Puerto Madero");
    break;
    case 3:
    alert("Su lugar a visitar es Avellaneda");
    break;
    case 4:
    alert("Su lugar a visitar es Palermo");
    break;
    case 5:
    alert("Su lugar a visitar es La Boca");
    break;
    default:
        alert("Numero incorrecto");
        break;
    
}


       

       

       
