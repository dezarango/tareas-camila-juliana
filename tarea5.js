function saludarCliente(primerNombre, segundoNombre, apellido, edadUsuario){
    return (`Hola! ${primerNombre} ${segundoNombre} ${apellido} tenés ${edadUsuario} años`)
}

document.querySelector('#ingresar').onclick = function(){
    const primerNombre = document.querySelector("#primer-nombre-usuario").value; 
    const segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
    const apellido = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;

    document.querySelector("h1").innerText = `Bienvenid@ ${primerNombre}`;
    document.querySelector("h2").innerText = `Hola, ${primerNombre} ${segundoNombre} ${apellido} tenés ${edadUsuario} años`
    return false

} 