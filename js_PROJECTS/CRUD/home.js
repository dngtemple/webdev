let movies = [];

if (localStorage.getItem("movies")!==null){

  let all_movies=JSON.parse(localStorage.getItem("movies"));

  movies=all_movies.filter(function(movie,index){
    return movie.blocked===false;
  })
}
else{
  localStorage.setItem("movies",JSON.stringify(movies));
}

// global variables
let movietorate=null;
let choose=null;
let average=null;




function moviesDisplay(arr){

  document.getElementById("all_movies").innerHTML="";

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


        // generating white stars

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

        // generating yellow stars

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

        let rates=document.createElement("div");
        rates.classList.add("rates");

        let h=document.createElement("p");
        h.classList.add("h");
        h.innerText=" ( 4.4 ) ";
        rates.appendChild(h);
        rating.appendChild(rates);

        if(ele.ratings.length === 0){
          h.innerText="( 0.0 )";
          yellowstars.style.width=0+"px";
        }
        else{
          let ave=averageR(ele.ratings);
          yellowstars.style.width=ave*20+"%";
          h.innerText=`( ${ave.toFixed(1)} )`;
        }


        let rateNow=document.createElement("h4");
        rateNow.classList.add("rateNow");
        rateNow.append("Rate Now");
        rateNow.onclick=function(){
          movietorate=ele;
          openModal();
        };
        card_details.appendChild(rateNow);


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

// function to close Modal
function closeModal(){
  document.getElementById("modal").style.display="none";
}

// function to open Modal
function openModal(){
  document.getElementById("modal").style.display="flex";
  document.getElementById("rate_title").innerText=movietorate.title;
}

// function to select rating
let submission=true;
function chooseRating(event){
  choose=event.target.getAttribute("num");
  let stars=document.getElementsByClassName("rate_star");

  for(let i =0;i<choose;i++){
    stars[i].style.color="gold";
  }
}

function confirming(event){
  if(submission===true){
    submission=false;
    clearRating();
  }

  submission=true;
  choose=event.target.getAttribute("num");
  let stars=document.getElementsByClassName("rate_star");

  for(let i =0;i<choose;i++){
    stars[i].style.color="gold";
  }
}

function clearRating(){

  if(submission===false){
    let stars=document.getElementsByClassName("rate_star");

    for(let i =0;i<5;i++){
      stars[i].style.color="gray";
    }
  }

}


// function to submit ratings
function submitRating(){

  movietorate.ratings.push(Number(choose));
  closeModal();
  moviesDisplay(movies);
  localStorage.setItem("movies",JSON.stringify(movies));

  submission=false;
  clearRating();

}

function averageR(arr){
  let sum=0;
  arr.forEach(function(num,index){
    sum+=num
  })

  return sum/arr.length;
}