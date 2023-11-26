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

        let rating=document.createElement("div");
        rating.classList.add("rating");

        let rating_stars=document.createElement("div");
        rating_stars.classList.add("rating_star");

        let whitestars=document.createElement("div");
        whitestars.classList.add("whitestars");
        for(let c=0;c<5;c++){
          let icon=document.createElement("i");
          icon.classList.add("icon");
          icon.classList.add("fa-solid");
          icon.classList.add("fa-star");
          whitestars.appendChild(icon);
        }    
        rating_stars.appendChild(whitestars);
        rating.appendChild(rating_stars);
        card_details.appendChild(rating);

        let yellowstars=document.createElement("div");
        yellowstars.classList.add("yellowstars");
        for(let c=0;c<5;c++){
          let icon=document.createElement("i");
          icon.classList.add("icon");
          icon.classList.add("fa-solid");
          icon.classList.add("fa-star");
          yellowstars.appendChild(icon);
        }    
        rating_stars.appendChild(yellowstars);
        rating.appendChild(rating_stars);
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

