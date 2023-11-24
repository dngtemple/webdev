let movies = [];

if (localStorage.getItem("movies")!==null){

  movies=JSON.parse(localStorage.getItem("movies"));
}
else{
  localStorage.setItem("movies",JSON.stringify(movies));
}


function moviesDisplay(arr){
    arr.forEach(function(ele,index){
        let card=document.createElement("div");
        card.classList.add("card");

        let card_image=document.createElement("img");
        card_image.classList.add("card_image");
        card_image.src=ele.posterurl;

        let card_details=document.createElement("div");
        card_details.classList.add("card_details");
        let movie_title=document.createElement("p");
        movie_title.classList.add("movie_title");
        movie_title.innerText=ele.title;
        card_details.appendChild(movie_title);


        let rating=document.createElement("p");
        rating.classList.add("rating");
        rating.innerText="rating";
        card_details.appendChild(rating);
    

        let button=document.createElement("button");
        button.classList.add("button");
        button.innerText="DETAILS";
        card_details.appendChild(button);


        

        card.appendChild(card_image);
        card.appendChild(card_details);

        document.getElementById("all_movies").appendChild(card);
    })

}

moviesDisplay(movies);

