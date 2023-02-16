let ratings=document.querySelectorAll(".review-nr");

ratings.forEach(((rating,index)=>{
    rating.ratingID=index;
    rating.addEventListener("click",rate)
}))
function rate(e){
    e.target.classList.toggle("active-rating");
    ratings.forEach((rating,index)=>{
        e.target.ratingID!==index && rating.classList.remove("active-rating")
    })
}


document.querySelector("#submit").addEventListener("click",()=>{
    try{
        let rating=document.querySelector(".active-rating").innerHTML;
       
            document.querySelector("#Submission-Section").style.display="none";
            document.querySelector("#Result-Section").style.display="block";
            document.querySelector("#result").innerHTML=rating;  
    }
    catch(ex){
        alert("Please choose a rating")
    }
   
   
})
