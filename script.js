

document.querySelectorAll(".review-nr").forEach((item,index,array)=>{
    item.addEventListener("click",()=>{
      for(let i=0;i<array.length;i++){
        document.querySelectorAll(".review-nr")[i].classList.remove("active-rating");
      }
      item.classList.toggle("active-rating");
    })
})

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