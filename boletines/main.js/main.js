//obtener los elementos de la clase.close
let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link) {

  //Agregar un evento click a cad uno de ellos - case sensitive
  link.addEventlistener("click", function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");

    //Quitarle las clases de animacion que ya tiene
    content.classList.remove("animate__slideInDown");
    content.classList.remove("animate__animated");

    //Quitarle las clases de animacion que ya tiene

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function() {
      window.history.go(-1);
    }, 600);
    setinterval

    return false;

  }};
}};
