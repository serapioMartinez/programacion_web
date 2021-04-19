const desplegar = document.querySelectorAll('.desplegar');
const contenido = document.querySelectorAll('div ul');
var lista= new Array(desplegar.length);

function desplegarContenido(i){
    if(lista[i]==false){
        desplegar[i].setAttribute("style","transform: rotate(180deg);");
        contenido[i].setAttribute("style","display:block;");
        
    }else{
        desplegar[i].setAttribute("style","transform: rotate(0deg);");
        contenido[i].setAttribute("style","display:none;");
    }
    lista[i]=!lista[i];
    
}
function inicializar(){
    for(let i=0;i<desplegar.length;i++){
        desplegar[i].addEventListener("click",function(){desplegarContenido(i)})
        lista[i]=false;
    }
}
window.onload=inicializar;
