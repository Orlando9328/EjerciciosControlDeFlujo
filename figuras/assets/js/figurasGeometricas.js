figuraGeometrica = prompt("Ingrese una opción del 1 al 4 para la figura deseada (1 cuadro, 2 triangulo, 3 rectangulo y 4 circulo");

 switch (figuraGeometrica){
     
    case "1":
    console.log("Seleccionaste la opción 1");

    ladoCuadro = prompt("Ingrese valor para saber uno de los lados del cuadro");
    areacuadroFinal = ladoCuadro * ladoCuadro;
    console.log("El área del cuadrado es: ", areacuadroFinal);
     
    pericuadroFinal = ladoCuadro * 4;
    console.log("El perimetro del cuadrado es: ", pericuadroFinal);
        break;    

    case "2":
    console.log("Seleccionaste la opción 2");
        
    basetriangulo = parseInt(prompt("Ingrese valor para saber la base de tu triangulo"));
    alturtriangulo = parseInt(prompt("Ingrese valor para saber la altura de tu triangulo"));
    areaTrianguloFinal = basetriangulo * alturtriangulo / 2;
    console.log("El área del triangulo es de: ", areaTrianguloFinal);
             
    periTriangulo = alturtriangulo + alturtriangulo + areaTrianguloFinal;
    console.log("El perimetro del triangulo es de: ", periTriangulo);
        break;      

     case "3":
    console.log("Seleccionaste la opción 3");

    baseRectangulo = parseInt(prompt("Ingrese valor para saber la base de tu rectangulo"));
    alturaRectangulo = parseInt(prompt("Ingrese valor para saber la altura de tu rectangulo"));
    areaRectangulo = baseRectangulo * alturaRectangulo;
    console.log("El área del rectangulo es de: ", areaRectangulo);

    periRectangulo = baseRectangulo + baseRectangulo + alturaRectangulo + alturaRectangulo;
    console.log("El perimetro del rectangulo es de: ", periRectangulo);
         break;


    case "4":
    console.log("Seleccionaste la opción 4");

    radio = parseFloat(prompt("Ingrese valor para saber el radio de tu circulo"));
    const pi = 3.1416 
    areaCirculoFinal = pi * radio *  radio;
    console.log("El área del circulo es de: ", areaCirculoFinal);

         break;
    
    default:
    console.log("Opción no valida");
    break;

} 

