const text_area = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");

function botonEncriptar(){

  const texto_encriptado = encriptar(text_area.value);
  mensaje.value = texto_encriptado;
  text_area.value = "";

}

function encriptar(string_encriptado){
  let codigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
  string_encriptado = string_encriptado.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if(string_encriptado.includes(codigo[i][0])){
      string_encriptado = string_encriptado.replaceAll(codigo[i][0],codigo[i][1]);
    }
  }
  return string_encriptado;
}

function botonDesencriptar(){
  const texto_encriptado = desencriptar(text_area.value);
  mensaje.value = texto_encriptado;
  text_area.value = "";
}

function desencriptar(string_desencriptado){
  let codigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
  string_desencriptado = string_desencriptado.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if(string_desencriptado.includes(codigo[i][1])){
      string_desencriptado = string_desencriptado.replaceAll(codigo[i][1],codigo[i][0]);
    }
  }
  return string_desencriptado;
}

function copiarMensaje() {
  const mensaje = document.querySelector(".text-mensaje");
  mensaje.select();
  document.execCommand("copy");
  mensaje.value = "";
  document.querySelector(".text-area").value = "";
}