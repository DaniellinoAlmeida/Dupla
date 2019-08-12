function enviar(){
  var taxa = document.getElementById('taxa').value;
  var sexo = document.getElementById('sexo').value;

    if(taxa == "1" || taxa == "2" || taxa == "3" || taxa == "4" || taxa == "5" &&  sexo == "M" || sexo == "m" || sexo == "masculino" || sexo == "Masculino" || sexo == "f" || sexo == "F" || sexo == "feminino" || sexo == "feminino"){
      location.href="calcular.html";
  }
}
function cmb(){
  var taxa = document.getElementById('taxa');
  var sexo = document.getElementById('sexo');
  var idade = parseInt(document.getElementById('idade')).value;
  var altura = parseFloat(document.getElementById('altura')).value;
  var peso = parseFloat(document.getElementById('peso')).value;
  var resul;

  if(taxa == "1" && sexo == "M" || sexo == "m" || sexo == "masculino"){
    resul = 1.2 * (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));

      alert("res:".resul);
  }
};