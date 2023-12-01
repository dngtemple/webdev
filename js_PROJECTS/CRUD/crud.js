let movies = [];

if (localStorage.getItem("movies")!==null){

  movies=JSON.parse(localStorage.getItem("movies"));
}
else{
  localStorage.setItem("movies",JSON.stringify(movies));
}

// pagination
let start=0;
let end=10;
let pagination=movies.slice(start,end);
let currentPage=1;
let totalPages=Math.ceil(movies.length/10);


document.getElementById("totalpages").innerText=totalPages;


function nextPage(){
  if (currentPage<totalPages){
  currentPage++;
  start+=10;
  end+=10;

  pagination=movies.slice(start,end);
  DisplayData(pagination);
  }

  document.getElementById("currentpage").innerText=currentPage;
}

function previousPage(){
  if (currentPage>1){
  currentPage--;
  start-=10;
  end-=10;

  pagination=movies.slice(start,end);
  DisplayData(pagination);
  }

  document.getElementById("currentpage").innerText=currentPage;
}

function inputPage(pageNum){
  if(pageNum !=="" && pageNum >=1 && pageNum <=totalPages){
    
    currentPage=pageNum;
    start=(currentPage-1)*10;
    end=(currentPage)*10;

    pagination=movies.slice(start,end);
    DisplayData(pagination);

    for (let a =1;a<=totalPages;a++){
      let li=document.getElementById(a);
      if(li){
        li.style.color="red";
      }
    }

    let lin=document.getElementById(pageNum);
    if(lin){
      lin.style.color="black";
    }

    document.getElementById("currentpage").innerText=currentPage;

  }


}

function numLinkPages(){
  for(let i =1;i<=totalPages;i++){
    let link=document.createElement("a");
    link.append(i);
    link.id=i;
    link.onclick=inputPage.bind(this,i);
    document.getElementById("page").appendChild(link);
  }
}
numLinkPages();





// function to display movies

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
    edit.onclick=setUpdate.bind(this,movie.id);
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
DisplayData(pagination);


function closePopUp(modal){
  document.getElementById(modal).style.display="none";

}




// function to view movie details

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
  document.getElementById("img").src=movie.posterurl;

  document.getElementById("popUp").style.display="flex";

}


function viewAdd(){
  document.getElementById("popUp_2").style.display="flex";
}



// function to create new movie
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

  DisplayData(pagination);

  document.getElementById("add_form").reset();

  closePopUp('popUp_2');


}



function convertTODate(){
  document.getElementById("add_releaseDate").type="date";
}

function convertTONumber(){
  document.getElementById("add_idmbrating").type="number";
}




// function to delete a MOvie
function deleteMovie(id){

  let index=movies.findIndex(function(movie,b){
    return movie.id===id;
  })

  movies.splice(index,1);
  localStorage.setItem("movies",JSON.stringify(movies));

  DisplayData(pagination);

}


// function to setting movie details in input fields

let movie_update=null;

function setUpdate(id){

  let movie=movies.find(function(movie,index){
    return movie.id===id;
  })

  movie_update=movie;

  document.getElementById("update_title").value=movie.title;
  document.getElementById("update_releaseDate").value=movie.releaseDate;
  document.getElementById("update_duration").value=movie.duration;
  document.getElementById("update_actors").value=movie.actors;
  document.getElementById("update_genres").value=movie.genres;
  document.getElementById("update_idmbrating").value=movie.imdbRating;
  document.getElementById("update_poster").value=movie.posterurl;
  document.getElementById("update_storyline").value=movie.storyline;


  document.getElementById("update_modal").style="display:flex";


}



// function to Update a Movie
function UpdateMovie(){

  movie_update.title=document.getElementById("update_title").value;
  movie_update.releaseDate=document.getElementById("update_releaseDate").value;
  movie_update.duration=document.getElementById("update_duration").value;
  movie_update.actors=document.getElementById("update_actors").value.split(",");
  movie_update.genres=document.getElementById("update_genres").value.split(",");
  movie_update.imdbRating=document.getElementById("update_idmbrating").value;
  movie_update.posterurl=document.getElementById("update_poster").value;
  movie_update.storyline=document.getElementById("update_storyline").value;


  localStorage.setItem("movies",JSON.stringify(movies));
  DisplayData(pagination);

  closePopUp('update_modal');


}

