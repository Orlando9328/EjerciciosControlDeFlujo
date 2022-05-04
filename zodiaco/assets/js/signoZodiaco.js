//Signo zodiacal

let dia = 0, mes = 0;
mes = prompt("Ingrese su mes (1-12)");
dia = prompt("Ingrese su día (1-31)");

switch(mes){
    case 1:
    if(dia < 21){
        console.log("Tu signo es: Capricarnio");
    }else{    
        console.log("Tu signo es: Acuario");}
    break;    

    case 2:
    if(dia < 19){
        console.log("Tu signo es: Acuario");
    }else{    
        console.log("Tu signo es: Piscis");}
    break;    

    case 3:
        if(dia < 21){
            console.log("Tu signo es: Piscis");
        }else{    
            console.log("Tu signo es: Aries");}
        break;

        case 4:
        if(dia < 21){
            console.log("Tu signo es: Aries");
        }else{    
            console.log("Tu signo es:  Tauro");}
        break;

        case 5:
        if(dia < 22){
            console.log("Tu signo es: Tauro");
        }else{    
            console.log("Tu signo es:  Géminis");}
        break;

        case 6:
        if(dia < 22){
            console.log("Tu signo es: Géminis");
        }else{    
            console.log("Tu signo es:  Cancer");}
        break;

        case 7:
        if(dia < 23){
            console.log("Tu signo es: Cancer");
        }else{    
            console.log("Tu signo es:  Leo");}
        break;

        case 8:
        if(dia < 24){
            console.log("Tu signo es: Leo");
        }else{    
            console.log("Tu signo es:  Virgo");}
        break;

        case 9:
        if(dia < 24){
            console.log("Tu signo es: Virgo");
        }else{    
            console.log("Tu signo es:  Libra");}
        break;

        case 10:
        if(dia < 24){
            console.log("Tu signo es: Libra");
        }else{    
            console.log("Tu signo es:  Escorpión");}
        break;

        case 11:
        if(dia < 23){
            console.log("Tu signo es: Escorpión");
        }else{    
            console.log("Tu signo es:  Sagitario");}
        break;

        case 12:
        if(dia < 22){
            console.log("Tu signo es: Sagitario");
        }else{    
            console.log("Tu signo es:  Capricornio");}
        break;

        default:
            console.log("El dato no es valido");
    } 
