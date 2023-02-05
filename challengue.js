const textarea = document.querySelector(".texto-ingresado")
const mensaje = document.querySelector(".mensaje")
const copia = document.querySelector(".copiar")
const validar = false

function validacion(Mensajevalidado){
    let letrasmayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let letrasconacento = ["á","é","í","ó","ú"]
    for(let i = 0; i < letrasmayusculas.length; i++){
        if(Mensajevalidado.includes(letrasmayusculas[i])){
            alert("Ingrese solo letras minusculas y sin acento")
            validar = false
            break
        } else{
            validar = true
        }
    }
    for(let i = 0; i < letrasconacento.length; i ++){
        if(Mensajevalidado.includes(letrasconacento[i])){
            alert("Ingrese solo letras minusculas y sin acento")
            validar = false
            break
        } else{
            validar = true
        }

    }
 
}

function valida(){
    let textoescrito = document.querySelector(".texto-ingresado")
    let validador = textoescrito.match(/^[a-z]*$/)
    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
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
    const textEncriptado = encriptar(textarea.value)
    mensaje.value = textEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    copia.textContent =  "Copiar"
    
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
    const textDesencriptado = desencriptar(textarea.value)
    mensaje.value = textDesencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    copia.textContent = "Copiar"
}

function btncopiar(){
    const textCopiado = mensaje.value
    navigator.clipboard.writeText(textCopiado)
    copia.textContent = "Copiado"
    

}
