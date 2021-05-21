const slider = document.querySelector(".rango");
const pageViews = document.querySelector("#monedas");
const price = document.querySelector("#val");
const extraUno = document.querySelector(".extra1");
const extraDos = document.querySelector(".extra2");
const extraTres = document.querySelector(".extra3");
let promoSwitch = document.querySelector("#switch");

function printPageViews (){
    if(slider.value == "0"){
        pageViews.textContent = "50";
        price.textContent = "1000";
        extraUno.textContent = "Super Fuerza";
        extraDos.textContent = "1 Espada";
        extraTres.textContent = "2 Bombas De Humo";
    }else if(slider.value == "25"){
        pageViews.textContent = "100";
        price.textContent = "2000";
        extraUno.textContent = "Super Fuerza";
        extraDos.textContent = "3 Espadas";
        extraTres.textContent = "2 Gases De Chile";
    }else if(slider.value == "50"){
        pageViews.textContent = "150";
        price.textContent = "3000";
        extraUno.textContent = "1 Cañon De Fuego";
        extraDos.textContent = "3 Espadas Y 1 Hacha";
        extraTres.textContent = "4 Gases De Chile";
    }else if(slider.value == "75"){
        pageViews.textContent = "200";
        price.textContent = "4000";
        extraUno.textContent = "300 Diamantes";
        extraDos.textContent = "2 Cañones De Fuego";
        extraTres.textContent = "Terremoto Mortal";
    }else if(slider.value == "100"){
        pageViews.textContent = "250";
        price.textContent = "5000";
        extraUno.textContent = "Unión a 2 Clanes";
        extraDos.textContent = "1000 Diamantes";
        extraTres.textContent = "2 Secuaces";
    };
};

slider.addEventListener("input",function (){
    let x = slider.value;
    //let color = "linear-gradient(90deg, rgb(184, 250, 243)" + x + "%, silver" + x + "%)";
    let color = `linear-gradient(90deg, hsl(44, 100%, 61%) ${x}%, silver ${x}%)`;
    slider.style.background = color;

    printPageViews ();
    
    if (promoSwitch.checked == true){
        let x = price.textContent*0.30;
        price.textContent = price.textContent - x;
        console.log(x);
    }else{
        printPageViews ();
    };
});

promoSwitch.addEventListener("input",function (){
    if (promoSwitch.checked == true){
        let x = price.textContent*0.30;
        price.textContent = price.textContent - x;
        console.log(x);
    }else{
        printPageViews ();
    };
})