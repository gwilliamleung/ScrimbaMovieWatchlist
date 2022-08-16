const movieList = document.getElementById("movieList")
const movieSearch = document.getElementById("textSearch")

document.getElementById("buttonSearch").addEventListener("click",function(){
    movieList.textContent =''
    fetch(`http://www.omdbapi.com/?s=${textSearch.value}&apikey=54959152`)
        .then(res=>res.json())
        .then(data=>{
            // const { Title, RunTime, Genre, Plot, Poster, Ratings} = data;
            console.log(data)
            for(item in data.Search){
                movieList.innerHTML += `
                <div class="movieContent"></div>
                <h3> ${data.Search[item].Title}
                <h2>`
            }
        })
})