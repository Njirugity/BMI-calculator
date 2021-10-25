

function bmiCalculator (){
    var weight= document.getElementById("uzito").value;
    var weight =parseInt(weight);
    var height= document.getElementById("urefu").value;
    var height = parseFloat(height);
    var BMI = Math.floor(weight/(height*height));
  


    
    if (BMI < 18){
        console.log(document.getElementById("output"). value= BMI + " You are underweight");
    } else if (BMI >19 && BMI< 25){
        console.log(document.getElementById("output"). value= BMI + " You are fit");
    } else if (BMI > 26 && BMI < 29){
        console.log(document.getElementById("output"). value= BMI + " You are overweight");
    } else{
        console.log(document.getElementById("output"). value= BMI + " You are obese");
    }
    

}
document.querySelector("button").addEventListener("click", bmiCalculator);
