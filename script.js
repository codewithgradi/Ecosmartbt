// Nav bar for mobile responsiveness
let menuList = document.getElementById("nav-id");
menuList.style.maxHeight = "0px";

// show and hide modal
document.getElementById('modal-show').addEventListener('click', () => {
    document.getElementById('modal').style.display = "block";
    
})
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').style.display="none"
})
// navigation bar for smaller devices
document.getElementById('menu-click').addEventListener('click', () => {
    if (menuList.style.display === "none") {
        menuList.style.maxHeight = "300px";     
        menuList.style.display="flex";
           
    }
else {
        menuList.style.display="none";
    } 
})
 
// calculations
const btnCalculate = document.querySelector('button');

let iCount = 0;

btnCalculate.addEventListener('click', function () {
     // 
     var rad1 = document.getElementById("size1");
     var rad2 = document.getElementById("size2");
     var rad3 = document.getElementById("size3");
     var rad4 = document.getElementById("size4");
     let vol;
     var  price;
     if (rad1.checked == true) {
         vol = parseInt(rad1.value);
     }
     else if (rad2.checked == true) {
         vol = parseInt(rad2.value);
     }
     else if (rad3.checked == true) {
         vol = parseInt(rad3.value);
     }
     else if (rad4.checked == true) {
         vol = parseInt(rad4.value);
     }
     else {
         alert("Select a volume");
         return;
     }
     // calculates price as per volume
     if (vol === 250){
         price = 500;
     }
     else if (vol === 500){
         price=1000;
     }
     else if (vol === 750){
         price=1500;
     }
     else if (vol === 1000){
         price=2500;
     }
     // total Cost
     let numOfBottles = document.getElementById('quantity').value;
     let totPriceDisplay = document.getElementById('total-price-value');

     let total = parseInt(numOfBottles) * price;
     // display
     totPriceDisplay.textContent = total;
    // color
    const selectElement = document.getElementById("color");
    let selectedColor = selectElement.value;

     alert("Order has been submited")
     let order = {
         "color": selectedColor,
         "volume": vol,
         "quantity": parseInt(numOfBottles),
         "total": total
     }
     console.log(order)
 }
)

// form submit button
const submitFormButton = document.getElementById('submit')
// 

submitFormButton.addEventListener('click', function () {
    // client object
    client = {}
    // user input
    const clientName = document.getElementById('client-name');
    const clientEmail = document.getElementById('client-email');
    var clientMessage = document.getElementById('client-message');
    // validations
    if (clientEmail.value === "" || clientName.value === '') {
        alert("Please enter your name and email!")
        return;//ends program here
    }
    else {
        const terms = document.getElementById('terms-and-conditions')
        if (clientMessage.value === '') {
            clientMessage = "Thank for this application."
            
        }
        else {
            clientMessage=clientMessage.value
        }
        if (terms.checked) {
            client = {
                "name": clientName.value,
                "email": clientEmail.value,
                "message": clientMessage
            }
            console.log(client)
        }
        else {
            alert("Please accept the terms and conditions")
        }
    }
})