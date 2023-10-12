const celsiusfield =document.querySelector("#celsius");
const degree =document.querySelector("#degree");
const convertBtn=document.querySelector("#convert-btn");
const tempType=document.querySelector("#temp-type");

window.addEventListener("load", () =>{
degree.value = " ";
celsiusfield.innerHTML = " ";

})

if(degree.value===" "){
convertBtn.setAttribute("disabled"," ");
setTimeout(() => {
    convertBtn.removeAttribute('disabled');
}, 4000);
}


convertBtn.addEventListener("click",(e) => {
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML = "<span><i class=`fa  fa-spinner fa-spin`> </i>Converting.. </span>  " ;
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000);

     

})

function convertToCelsius(){
    let inputvalue = degree.value;

   setTimeout(() => {
    if(tempType.value=== "fahrenheit"){
        const fahrenheitToCelsius = (inputvalue - 32)*(5/9); 
        celsiusfield.innerHTML= `${fahrenheitToCelsius.toFixed(3)} 
        &deg;c`;
    }
    else if(tempType.value=== "kelvin") {
        const kelvinToCelsius = inputvalue - 273.15;
        celsiusfield.innerHTML=`${kelvinToCelsius.toFixed(3)} 
        &deg;c`;
    }
    
   }, 1200);
}