

function bmiCalculator (){
    var weight= document.getElementById("uzito").value;
    var weight =parseInt(weight);
    var height= document.getElementById("urefu").value;
    var height = parseFloat(height);
    var BMI = Math.floor(weight/(height*height));
   

    
    if (BMI < 18){
        alert("underweight");
    } else if (BMI >19 && BMI< 25){
        alert("fit");
    } else if (BMI > 26 && BMI < 29){
        alert("overweight");
    } else{
        alert("obese");
    }

}
document.querySelector("button").addEventListener("click", bmiCalculator);
