
let number=0;

let resultado = (numero) =>{
    document.getElementById('resultado').innerHTML=numero;
    
}

let sumar = () =>{

    resultado(++number);
                 
}

let restar = () =>{
    resultado(--number);
        
}

let limpiar=()=>{
    number=0;
    resultado(number);
    
}

