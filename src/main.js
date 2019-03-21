//aqui van las funciones
window.onload = () => {
    document.getElementById("page1").style.display="block";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="none";
  }
  document.getElementById("pagina2").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="block";
    document.getElementById("page3").style.display="none";
  });
  document.getElementById("pagina3").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="block";
  });
  document.getElementById("init").addEventListener("click",() => {
    document.getElementById("page1").style.display="block";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="none";
  });
  document.getElementById("about").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="block";
    document.getElementById("page3").style.display="none";
  });
  document.getElementById("datos").addEventListener("click",() => {
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="none";
    document.getElementById("page3").style.display="block";
  });

document.getElementById('btnsearch').addEventListener('click',() =>{
  let search = document.getElementById('search').value;
  fetch('http://www.omdbapi.com/?apikey=6150b42c&s=' + search)
  .then(data=>data.json())
  .then(data=>{
      searchData = data.Search;
      for(let i=0;i<searchData.length;i++){
      document.getElementById('root').innerHTML += `
      <br>
     <div class="card">
  <img src="${searchData[i].Poster}" class="card-img-top" alt="${searchData[i].Title}"i>
  <div class="card-body">
    <h5 class="card-title">${searchData[i].Title}</h5>
    <p class="card-text">Año: ${searchData[i].Year}</p>
    <p class="card-text">Descripción: ${searchData[i].Plot}</p>
  </div>
</div> `
      }
  })
});

//cada pelicula tiene un id en imdb por lo que debemos intentar llamar a esa api y pedirle que inserte la informacion del id 
