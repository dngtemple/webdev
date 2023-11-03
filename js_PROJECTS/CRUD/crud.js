let movies = [];

if (localStorage.getItem("movies")!==null){

  movies=JSON.parse(localStorage.getItem("movies"));
}
else{
  localStorage.setItem("movies",JSON.stringify(movies));
}




function DisplayData(moviesArr){

  document.getElementById("displayTable").innerHTML="";
  
  moviesArr.forEach(function(movie,index){

    let row=document.createElement("tr");

    let number=document.createElement("td");
    number.append(index+1);

    let title=document.createElement("td");
    title.append(movie.title);

    let releaseDate=document.createElement("td");
    releaseDate.append(movie.releaseDate);


    let genres=document.createElement("td");
    movie.genres.forEach(function(a,b){
      genres.append(a +". ");
    });

    let imdbRating=document.createElement("td");
    imdbRating.append(movie.imdbRating);

    let duration=document.createElement("td");
    duration.append(movie.duration);

    let actions=document.createElement("td");

    let view=document.createElement("i");
    view.classList.add("fa-solid");
    view.classList.add("fa-eye");
    view.classList.add("viewpop");
    view.onclick=viewPopUp.bind(this,movie.id);
    actions.appendChild(view);

    let edit=document.createElement("i");
    edit.classList.add("fa-solid");
    edit.classList.add("fa-pen-to-square");
    actions.appendChild(edit);

    let trash=document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash");
    trash.onclick=deleteMovie.bind(this,movie.id);
    actions.appendChild(trash);

    actions.classList.add("actions");


    row.appendChild(number);
    row.appendChild(title);
    row.appendChild(releaseDate);
    row.appendChild(genres);
    row.appendChild(imdbRating);
    row.appendChild(duration);
    row.appendChild(actions);

    document.getElementById("displayTable").appendChild(row);

  });

}
DisplayData(movies);


function closePopUp(modal){
  document.getElementById(modal).style.display="none";

}

function viewPopUp(movieid){

  let movie=movies.find(function(movie,ind){
    return movie.id===movieid;
  })

  document.getElementById("title").innerText=movie.title;
  document.getElementById("storyline").innerText=movie.storyline;
  document.getElementById("releaseDate").innerText=movie.releaseDate;
  document.getElementById("actors").innerText=movie.actors;
  document.getElementById("genres").innerText=movie.genres;
  document.getElementById("idmb").innerText=movie.imdbRating;

  document.getElementById("popUp").style.display="flex";

}


function viewAdd(){
  document.getElementById("popUp_2").style.display="flex";
}


function createMovie(){

  let lastId;

  if(movies.length!==0){
    lastId=movies[movies.length-1].id;
  }
  else{
    lastId=0;
  }

  let movie={
    ratings:[],
    id:lastId+1
  }
  movie.title=document.getElementById("add_title").value;
  movie.releaseDate=document.getElementById("add_releaseDate").value;
  movie.duration=document.getElementById("add_duration").value;
  movie.actors=document.getElementById("add_actors").value.split(",");
  movie.genres=document.getElementById("add_genres").value.split(",");
  movie.imdbRating=document.getElementById("add_idmbrating").value;
  movie.posterurl=document.getElementById("add_poster").value;
  movie.storyline=document.getElementById("add_storyline").value;

  movies.push(movie);

  localStorage.setItem("movies",JSON.stringify(movies));

  DisplayData(movies);

  document.getElementById("add_form").reset();

  closePopUp('popUp_2');


}



function convertTODate(){
  document.getElementById("add_releaseDate").type="date";
}

function convertTONumber(){
  document.getElementById("add_idmbrating").type="number";
}

function deleteMovie(id){

  let index=movies.findIndex(function(movie,b){
    return movie.id===id;
  })

  movies.splice(index,1);
  localStorage.setItem("movies",JSON.stringify(movies));

  DisplayData(movies);


}


