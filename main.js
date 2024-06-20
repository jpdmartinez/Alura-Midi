function tocarSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio).play();
    
    if (elemento != null && elemento.localName === 'audio'){
            elemento.play();
    } else {
        console.log('Elemento não encontrado!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador<9; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocarSom(idAudio)
    };
    
    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
