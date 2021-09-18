export const peliculas = (cantidad) => {

    const url_generos = `https://api.themoviedb.org/3/movie/popular?api_key=9264ab1bac48e8203cb44c956e299c5d&include_image_language=es,null&language=es-ES`;

    const llave = "9264ab1bac48e8203cb44c956e299c5d";

    fetch(
        url_generos +
        new URLSearchParams({
            api_key: llave,

        })
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`Error: ${ response.statusText } Codigo: ${ response.status }
            
        ` );
    
            return;
        }
        // no hay problemas, podemos ver el contenido
        response.json().then((data) => {
            console.log(data);
            // console.log(data.genres);
            imprimirHTML(data.results);
        });
    });
};



function imprimirHTML(peliculas) {
    let html = '';
    let html_comedia = '';
    peliculas.forEach((pelicula) => {
        html += `
             <select name="peli" >
             {this.data.results.map( elemento =>{
                <option key={elemento.id} value={elemento.id}> {elemento.id}</option> 
             }
             )}
             
            
            `;
    });
    const contenedorApp = document.querySelector("#app");
    contenedorApp.innerHTML = html;
}

//Identificador: ${pelicula.id}<br>
  //          Nombre: ${pelicula.title}<br>
    //        Fecha: ${pelicula.release_date}<br>
      //       <img src='${"https://image.tmdb.org/t/p/w500/"+pelicula.backdrop_path}'><br><br>
