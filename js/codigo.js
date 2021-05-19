const slider = document.querySelector(".rango");
const pageViews = document.querySelector("#monedas");
const price = document.querySelector("#val");
let promoSwitch = document.querySelector("#switch");

function printPageViews (){
    if(slider.value == "0"){
        pageViews.textContent = "50";
        price.textContent = "1000";
    }else if(slider.value == "25"){
        pageViews.textContent = "100";
        price.textContent = "2000";
    }else if(slider.value == "50"){
        pageViews.textContent = "150";
        price.textContent = "3000";
    }else if(slider.value == "75"){
        pageViews.textContent = "200";
        price.textContent = "4000";
    }else if(slider.value == "100"){
        pageViews.textContent = "250";
        price.textContent = "5000";
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