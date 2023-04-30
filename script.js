function EsconderElemento(e){
    let imagen= document.getElementsByClassName(e);
    imagen[0].style.visibility= 'hidden';
}
function MostrarElemento(e){
    let imagen= document.getElementsByClassName(e);
    imagen[0].style.visibility= 'visible';
}

function EncriptarTexto() {
    const x = document.getElementById("entrada-texto").value;
    const myelement = document.getElementsByClassName("salida-texto1");
    const myelement2 = document.getElementsByClassName("ingresar-texto");

   //const original=Array.from(x);
   if(x.length==0){
        //MostrarElemento("imagen-munheco");
        //MostrarElemento("salida-conversion");
        //MostrarElemento("mensaje-instructivo");
        EsconderElemento("button-copiar");        
        
    }
    else{
        //EsconderElemento("imagen-munheco");
        //EsconderElemento("salida-conversion");
        //EsconderElemento("mensaje-instructivo");
        MostrarElemento("button-copiar");
    }
   const chars = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
   };

   const regex = new RegExp('[Á-Ú]|[A-Z]|[á-ú]|[@$?_]|[-]','g');
   if(regex.test(x)!=true){

       var c=x.replaceAll(/[eiaou]/g, m=>chars[m]);
       myelement[0].innerText =c;
       myelement2[0].value="";
       //const a = document.getElementsByClassName("salida-texto1")[0].innerHTML; //prueba obtener texto p con innerhtml class
       //console.log(a+"promtp");
       
       console.log("encriptado");
    }
    else{
        console.log("fail")
    }
}

function DesencriptarTexto(){
    const a = document.getElementById("entrada-texto").value;
    const myelement1 = document.getElementsByClassName("salida-texto1");
    const myelement2 = document.getElementsByClassName("ingresar-texto");
    if(a.length==0){
        //MostrarElemento("imagen-munheco");
        //MostrarElemento("salida-conversion");
        //MostrarElemento("mensaje-instructivo");
        EsconderElemento("button-copiar");        

    }
    else{
        //EsconderElemento("imagen-munheco");
        //EsconderElemento("salida-conversion");
        //EsconderElemento("mensaje-instructivo");
        MostrarElemento("button-copiar");
    }
    
    const chars1 = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    //a.match(/[Á-Ú]|[A-Z]|[á-ú]/gi);
    //let v =a.test(/[Á-Ú]|[A-Z]|[á-ú][]/g);
    const regex = new RegExp('[Á-Ú]|[A-Z]|[á-ú]|[@$?_]|[-]','g');
    
    if(regex.test(a)!=true){

        var h=a.replaceAll(/(enter|imes|ai|ober|ufat)/gi, m=>chars1[m]);     
        
        myelement1[0].innerText =h;
        myelement2[0].value="";
        console.log(" desencriptado");
    }
    else{
        console.log("fail")
    }
}
function copiartexto(){
    console.log("succest");
    const myelement = document.getElementsByClassName("salida-texto1");


    navigator.clipboard.writeText(myelement[0].innerText).then(
        () => {
          /* clipboard successfully set */
        },
        () => {
          /* clipboard write failed */
        }
      );

}
function myFunction() {
    
    const x = document.getElementById("entrada-texto").value;
    const myelement = document.getElementsByClassName("salida-texto1");
    
    
    //EsconderElemento("imagen-munheco");
    //EsconderElemento("salida-conversion");
    //sconderElemento("mensaje-instructivo");
}

  function test(){
      
      if(input1)    {
          input1.addEventListener('input',() => {
              //console.log('You modifiqued input');
            });
            
        }
        //myFunction();
    }

    const ButtonEncriptar = document.querySelector("#encriptar");
    const ButtonDesencriptar =document.querySelector("#desencriptar");
    const ButtonCopiar =document.querySelector("#copiar");
    const input1 = document.querySelector("#entrada-texto");
    //input1.addEventListener('input', myFunction);
    ButtonEncriptar.addEventListener('click', EncriptarTexto);
    ButtonDesencriptar.addEventListener('click', DesencriptarTexto);
    ButtonCopiar.addEventListener('click', copiartexto);

    //test();



    