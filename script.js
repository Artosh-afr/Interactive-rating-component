function qs(selector){
    return document.querySelector(selector);
}
//entire list
var one=qs(".one");
var two=qs(".two");
var three=qs(".three");
var four=qs(".four");
var five=qs(".five");

var entireList =document.querySelectorAll("li");

var FinalAns="";
//review rating
function review_choice(UserChoice){
    for(let i=0;i<5;i++){
    if(UserChoice.innerHTML==entireList[i].innerHTML){
        UserChoice.style.backgroundColor = 'var(--Medium_Grey)';
        UserChoice.style.color="white";
        UserChoice.onmouseover=null;
        UserChoice.onmouseout=null;
    }else{
        entireList[i].style.backgroundColor="var(--Dark_Blue)";
        entireList[i].style.color="var(--Medium_Grey)";

        entireList[i].onmouseover=function(){
            entireList[i].style.backgroundColor="var(--Orange)";
            entireList[i].style.color="white";
        };

        entireList[i].onmouseout=function(){
            entireList[i].style.backgroundColor="var(--Dark_Blue)";
            entireList[i].style.color="var(--Medium_Grey)";
            };
        }
    }
    FinalAns=UserChoice.innerHTML;
}
//Result


document.querySelector("#submit").onclick=function(){
    if(FinalAns==""){
        window.alert("Please choose a rating.")
    }else{
        document.querySelector("#Submission-Section").style.display="none";
        document.querySelector("#Result-Section").style.display="block";
        document.querySelector("#result").innerHTML=FinalAns;

    }
}
