document.addEventListener("DOMContentLoaded", function(){

    // Section 1: Random Quote
    const quoteText = document.querySelector(".quote");
    const authorName = document.querySelector(".name");
    let quoteBtn = document.querySelector("button#quote");
    let favouriteBtn = document.querySelector("#Favourite");
    let likeBtn = document.querySelector(".like");
  
    function randomQuote(){
      quoteBtn.innerText = "loading Quote...";
      fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(function(data) {
          console.log(data);
          quoteText.innerText = data.content;
          authorName.innerText = data.author;
  
          likeBtn.addEventListener("click", ()=>{
            likeBtn.style.color = "Red";
          });
  
          favouriteBtn.addEventListener("click", ()=>{
            favouriteBtn.style.color ="Red";
            let li = document.createElement("li");
            li.innerHTML = data.content;
            let p = document.createElement("p");
            p.innerHTML = `~ ${data.author}`;
            p.setAttribute("class", "authorName");
            let div = document.getElementById("listFavourite");
            div.append(li);
            div.append(p);
          },{once: true});
  
          quoteBtn.innerText = "New Quote";
          likeBtn.style.color = "#7b2cbf";
          favouriteBtn.style.color = "#7b2cbf";
        });
  
      let copyBtn = document.querySelector(".copy");
      copyBtn.addEventListener("click", ()=>{
        navigator.clipboard.writeText(quoteText.innerText);
      });
    }
  
    quoteBtn.addEventListener("click", randomQuote);
    randomQuote();
  