
const valor_1=document.getElementById('valor_1');
const valor_2=document.getElementById('valor_2');
const signo=document.getElementById('signo');
const boton_sumar=document.getElementById('boton+');
const pantalla=document.getElementById('pantalla');

let primer_valor=0;
let segundo_valor=0;

const asignar_signo=(nuevo_signo)=>{
    if(signo.innerHTML!=nuevo_signo){
        signo.innerHTML="+"; 
    }
    else{
        realizar_operacion();
        signo.innerHTML=nuevo_signo;
    }
}


const asignar_numero=(valor)=>{
    if (signo.innerHTML=='')
        {
          valor_1.innerHTML=primer_valor*10+valor;
          primer_valor=parseInt(valor_1.innerHTML);
        }
    else{
            valor_2.innerHTML=segundo_valor*10+valor; 
            segundo_valor= parseInt(valor_2.innerHTML);
    }
}

const realizar_operacion=()=>{
    if(signo.innerHTML==='+'){
            const suma=sumar(primer_valor,segundo_valor)
            valor_1.innerHTML=suma;
            primer_valor=parseInt(valor_1.innerHTML);
            valor_2.innerHTML="";
            segundo_valor= 0;
            signo.innerHTML="";
            
    }
}

const sumar=(primer_valor,segundo_valor)=>{
    return (primer_valor+segundo_valor);
}