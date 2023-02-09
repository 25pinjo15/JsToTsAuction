
import { loadUnitsToMemory, saveUnitsToLocalStorage, seed, highestIdPlusOne, Unit } from '../../main';

// This will run function and event call when the page is loaded
window.onload = function (): void {
    seed();
    
    Units = loadUnitsToMemory();
    // add event on submit button
    const submitButton: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;
    submitButton.addEventListener("click", addNewUnit);

    const floatingForm: HTMLFormElement = document.getElementById("floatingForm") as HTMLFormElement;
    
    floatingForm.addEventListener("submit", (event) => {
        event.preventDefault();
       
    });

    


    // event.preventDefault();


}

let floatingTitle: HTMLInputElement = document.getElementById("floatingTitle") as HTMLInputElement;
let floatingOption: HTMLInputElement = document.getElementById("floatingOption") as HTMLInputElement;
let floatingYear: HTMLInputElement = document.getElementById("floatingYear") as HTMLInputElement;
 let floatingPrice: HTMLInputElement = document.getElementById("floatingPrice") as HTMLInputElement;
 let floatingLocation: HTMLInputElement = document.getElementById("floatingLocation") as HTMLInputElement;
 let floatingType: HTMLSelectElement = document.getElementById("floatingType") as HTMLSelectElement;
 let floatingSale: HTMLInputElement = document.getElementById("floatingSale") as HTMLInputElement;
 let floatingLink: HTMLInputElement = document.getElementById("floatingLink") as HTMLInputElement;
 let floatingImage: HTMLInputElement = document.getElementById("floatingImage") as HTMLInputElement;
 let floatingDesc: HTMLInputElement = document.getElementById("floatingDesc") as HTMLInputElement;

 // export all floating variables
    export const FormVar = { floatingTitle, floatingOption, floatingYear, floatingPrice, floatingLocation, floatingType,
         floatingSale, floatingLink, floatingImage, floatingDesc };

let Units: Array<Unit> = [];
let highestId: number = 1;


 




// This will display the units in the table
export function clearForm(): void {
    floatingTitle.value = "";
    floatingOption.value = "";
    floatingYear.value = "";
    floatingPrice.value = "";
    floatingLocation.value = "";
    floatingType.value = "";
    floatingSale.checked = false;
    floatingLink.value = "";
    floatingImage.value = "";
    floatingDesc.value = "";
}

function addNewUnit(): void {
    addUnit(highestIdPlusOne(highestId, Units));
}


// this will add a unit to the array from the bootstrap form
export function addUnit(idToPush: number): void {
    
    // prevent the form from submitting\
    

   
    
    Units = loadUnitsToMemory();
    
    

    // Units = JSON.parse(localStorage.getItem("units"));

//    prevent the form to clear
    ;


    // Check for empty fields and wrong values
    if (floatingTitle.value == "") {
        alert("Please fill the title field");
        return;
    }
    

    if (floatingYear.value == "") {
        alert("Please fill the year field");
        return;
    }
    if (+floatingYear.value < 1900 || +floatingYear.value > 2022) {
        alert("Please enter a valid year");
        return;
    }
    if (floatingPrice.value == "") {
        alert("Please fill the price field");
        return;
    }
    if (+floatingPrice.value < 0 || +floatingPrice.value > 100000000) {
        alert("Please enter a valid price");
        return;
    }

    if (floatingLocation.value == "") {
        alert("Please fill the location field");
        return;
    }
    if (floatingType.value == "Type select menu") {
        alert("Please fill the type field");
        return;
    }
    if (floatingLink.value == "") {
        alert("Please fill the link field");
        return;
    }
    if (floatingImage.value == "") {
        alert("Please fill the image field");
        return;
    }

    

    

    

    let unitToPush: Unit = {
        id: idToPush,
        title: floatingTitle.value,
        option: floatingOption.value,
        year: +floatingYear.value,
        price: +floatingPrice.value,
        location: floatingLocation.value,
        type: floatingType.value,
        forSale: readCheckBox(),
        link: floatingLink.value,
        image: floatingImage.value,
        description: floatingDesc.value
    };
    
    Units.push(unitToPush);


    
    




    
    saveUnitsToLocalStorage(Units);

    
    Units = loadUnitsToMemory();
    // clear the form
    clearForm();
    // return to home page
    const redirect = (url: string, asLink:boolean = true): void => {
        asLink ? (window.location.href = url) : window.location.replace(url);
    }
    redirect("/index.html", true);
    
    
  
}



//this will read the checkbox and return true or false
export function readCheckBox(): boolean {
    ;
    if (floatingSale.checked == true) {
        return true;
    } else {
        return false;
    }
    
}




