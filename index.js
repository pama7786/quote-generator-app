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
  
    // Section 2: Search Quote
    function searchQuote(){
      document.querySelector("form#search-author").addEventListener("submit", function(e){
        e.preventDefault();
        let name = e.target.searchinput.value;
        if (name === ""){
          alert("No valid input");
        } else {
          let authors = document.querySelectorAll("div#listFavourite p.authorName");
          let authors2 = document.querySelectorAll("div#listFavourite p.authorName");
          for(let author2 of authors2){
            let quoteName2 = author2.previousSibling;
            quoteName2.style.color = "black";
            author2.style.color = "black";
          }
  
          console.log(authors);
          for(let author of authors){
            let nameCheck = author.textContent;
            if(`~ ${name}` === nameCheck || name === nameCheck){
              let quoteName = author.previousSibling;
              quoteName.scrollIntoView();
              quoteName.style.color = "red";
              author.style.color = "red";
              console.log(author);
            }
          }
        }
      });
    }
  
    searchQuote();
  
    // Section 3: Sign Up Form
    function signupForm() {
      document.querySelector("section#signUp").style.display = "none";
      let signUp = document.querySelector("p#sign-up-nav-bar");
      signUp.addEventListener("click", function () {
        document.querySelector("section#signUp").setAttribute("style", "");
      });
    }
  
    signupForm();
  
    // Section 4: Feedback Form
    function feedBackForm(){
      document.querySelector("section#feedback-form").style.display = "none";
      document.querySelector("p#leave-feedback").addEventListener("click",function(){
        document.querySelector("section#feedback-form").setAttribute("style","");
      });
    }
  
    feedBackForm();
  
    // Section 5: Submit Alert
    function submitAlert() {
      function alertTimeout() {
        alert("Thank you for signing up");
      }
      setTimeout(alertTimeout, 5);
    }
  
   