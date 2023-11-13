function placa(){
    const texto = document.querySelector("h1");
    const pla = document.querySelector('#valor1').value;
    const dia = document.querySelector('#valor2').value;
    
    if((pla == 1 || pla == 2) && (dia == "segunda" || dia == "Segunda")) {
        texto.innerHTML = "Circulação proibida";}
        
        else if((pla == 3 || pla == 4) && (dia == "terça" || dia == "Terça")) {
        texto.innerHTML = "Circulação proibida";}
        
        else if((pla == 5 || pla == 6) && (dia == "quarta" || dia == "Quarta")) {
        texto.innerHTML = "Circulação proibida";}
        
        else if((pla == 7 || pla == 8) && (dia == "quinta" || dia == "Quinta")) {
        texto.innerHTML = "Circulação proibida";}
        
        else if((pla == 9 || pla == 0) && (dia == "sexta" || dia == "Sexta")) {
        texto.innerHTML = "Circulação proibida";}
        
        else if((pla > 9 || pla < 0 || pla == "" || pla == null) && ( dia !== "segunda" || dia !== "Segunda" || dia !== "terça" || dia !== "Terça" || dia !== "quarta" || dia !== "Quarta" || dia !== "quinta" || dia !== "Quinta" || dia !== "sexta" || dia !== "Sexta" || dia === null || dia.length === 0)) {
            texto.innerHTML = "Placa ou dia incorretos";}
        
        else {
            texto.innerHTML = "Circulação Aprovada";
        }
    }       