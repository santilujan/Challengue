const textarea = document.querySelector(".texto-ingresado")
const mensaje = document.querySelector(".mensaje")
const copia = document.querySelector(".copiar")
var validar = false

function validacion(Mensajevalidado){
    
    var letrasmayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var letrasconacento = ["á","é","í","ó","ú"]
    for(var u = 0; u < letrasmayusculas.length; u = u + 1){
        if(Mensajevalidado.includes(letrasmayusculas[u])){
            alert("Ingrese solo letras minusculas y sin acento")
            break
        } 
        }
    for(var a = 0; a < letrasconacento.length; a = a +1){
        if(Mensajevalidado.includes(letrasconacento[a])){
            alert("Ingrese solo letras minusculas y sin acento")
            break
        } 

    }
    if(u == 26 && a == 5){
        validar = true
    } else {
        validar = false
    }
    return validar
}






function encriptar(MEncriptado){
  
    let keys = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    MEncriptado = MEncriptado

    for(let i = 0; i < keys.length; i++) {
        if(MEncriptado.includes(keys[i][0])){
                MEncriptado = MEncriptado.replaceAll(keys[i][0], keys[i][1])
        }
    }
    return MEncriptado

}

function btnencriptar(){
    if(validacion(textarea.value) == true){
        if(encriptar(textarea.value) == ""){
            alert("No se ingreso ningun mensaje")
        } else{
        const textEncriptado = encriptar(textarea.value)
        mensaje.value = textEncriptado
        textarea.value = "";
        mensaje.style.backgroundImage = "none"
        copia.textContent =  "Copiar"
        }
    } 
}



function desencriptar(Mdesencriptado){
    let keys = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    Mdesencriptado = Mdesencriptado.toLowerCase()

    for(let i = 0; i < keys.length; i++) {
        if(Mdesencriptado.includes(keys[i][1])){
                Mdesencriptado = Mdesencriptado.replaceAll(keys[i][1], keys[i][0])
        }
    }
    return Mdesencriptado
}

function btndesencriptar(){ 
    if(validacion(textarea.value) == true){
        if(desencriptar(textarea.value) == ""){
            alert("No se ingreso ningun mensaje")
        } else{
    const textDesencriptado = desencriptar(textarea.value)
    mensaje.value = textDesencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    copia.textContent = "Copiar"
        }
    }
}

function btncopiar(){
    const textCopiado = mensaje.value
    navigator.clipboard.writeText(textCopiado)
    copia.textContent = "Copiado"
    

}
