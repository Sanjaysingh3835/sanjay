

async function generatememe(){

    let data = await fetch("https://jsonplaceholder.typicode.com/photos"). then((response) =>{
        return response.json()}
    );

    document.querySelector("img").setAttribute("src",data[6].url);
    document.querySelector(".meme-title").innerHTML = data[0].title;
    document.querySelector(".meme-author").innerHTML = data.length;

    }
