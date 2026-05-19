function mostrarInfo(parte){

    let texto = document.getElementById("texto");

    if(parte == "fuente"){
        texto.innerHTML = "La fuente de poder suministra energía a todos los componentes de la computadora.";
    }

    else if(parte == "placa"){
        texto.innerHTML = "La placa base conecta todos los componentes del computador.";
    }

    else if(parte == "ram"){
        texto.innerHTML = "La memoria RAM almacena datos temporalmente mientras la computadora está encendida.";
    }

    else if(parte == "disco"){
        texto.innerHTML = "El disco duro almacena archivos, programas y el sistema operativo.";
    }

    else if(parte == "cables"){
        texto.innerHTML = "Los cables SATA permiten conectar discos duros y unidades a la placa base.";
    }

    else if(parte == "gabinete"){
        texto.innerHTML = "El gabinete protege y organiza todos los componentes internos de la PC.";
    }

}