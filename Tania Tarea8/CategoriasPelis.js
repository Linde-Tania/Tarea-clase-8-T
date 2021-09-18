export const categorias = (cantidad) => {

    const url_generos = `https://api.themoviedb.org/3/genre/movie/list?api_key=9264ab1bac48e8203cb44c956e299c5d&language=es-ES`;

    const llave = "9264ab1bac48e8203cb44c956e299c5d";

    fetch(
        url_generos +
        new URLSearchParams({
            api_key: llave,

        })
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`Error: ${response.statusText} Codigo: ${response.status}
        `);
            return;
        }
        // no hay problemas, podemos ver el contenido
        response.json().then((data) => {
            console.log(data);
            console.log(data.genres);
            imprimirHTML(data.genres);
        });
    });
};

function imprimirHTML(categorias) {
    let html = '';
    let html_comedia = '';
    categorias.forEach((generos) => {

        html += `
        <li>
      ID:  ${generos.id}   || Categoria:  ${generos.name}
        </li>
        `;
    });
    const contenedorApp = document.querySelector("#app");
    contenedorApp.innerHTML = html;
};

function cambiar_categoria(cat) {
    var cat = document.getElementById(cat);

    if (cat.value == 28) {

    }
}