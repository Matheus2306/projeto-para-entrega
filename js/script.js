trocatema = () => {
  // alert("troca tema")
  // const html =document.documentElement
  // document.querySelector("body").style.background="pink"

  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light");

  const imagem = isLight ? "./img/perfil.png" : "./img/OIP.jpg";

  document.querySelector("#profile img").setAttribute("src", imagem);

  const alt = isLight ? "pessoa de oculos" : "doomguy";

  document.querySelector("#profile img").setAttribute("alt", alt);

};
