var Number1=(Math.random()*100);
var ans=parseInt((Math.round(Number1)));
document.getElementById("num1").value=ans;
var Number2=(Math.random()*100);
var ans2=parseInt((Math.round(Number2)));
document.getElementById("num2").value=ans2;
function demo(){
    var Number3=document.getElementById("num3").value;
       if((ans+ans2)==Number3){
        document.getElementById("result").innerHTML="Correct Value";
        document.getElementById("result").className="green";
    }
    else{
        document.getElementById("result").innerHTML="Incorret Value";
        document.getElementById("result").className="red";
    }
}
function reset(){
    document.getElementById("num1").value=" ";
    document.getElementById("num2").value=" ";
    document.getElementById("num3").value=" ";
}