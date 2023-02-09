import { loadUnitsToMemory, saveUnitsToLocalStorage, seed, Unit } from "../../main";
import { addUnit} from "../form/scriptForm";

import { FormVar } from "../form/scriptForm";

let idToModify: number = 0;

// This will run function and event call when the page is loaded
window.onload = function (): void {
    idToModify = +localStorage.getItem("idToModify")!;
    seed();
    Units = loadUnitsToMemory();
    loadUnitsIntoForm();
    // add event on submit button
    const submitButton: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;
    submitButton.addEventListener("click", addExistingUnits);
   
    const floatingForm: HTMLFormElement = document.getElementById("floatingForm") as HTMLFormElement;
    
    floatingForm.addEventListener("submit", (event):void => {
        event.preventDefault();
       
    });




}
// This will take all the units object a json to local storage
//
let Units: Array<Unit> = [];

function addExistingUnits(): void {
    addUnit(idToModify)
    
}



 // This will put all the current units with the idToModify in the form 
function loadUnitsIntoForm(): void {
    
    
    for (var i: number = 0; i < Units.length; i++) {
        if (Units[i].id == idToModify) {
            FormVar.floatingTitle.value = Units[i].title;
            FormVar.floatingOption.value = Units[i].option;
            FormVar.floatingYear.value = Units[i].year.toString();
            FormVar.floatingPrice.value = Units[i].price.toString();
            FormVar.floatingLocation.value = Units[i].location;
            // put the selected type in the form Truck = 1 Two = 2 Three = 3
            FormVar.floatingType.value = Units[i].type;
            
            FormVar.floatingLink.value = Units[i].link;
            FormVar.floatingImage.value = Units[i].image;
            FormVar.floatingDesc.value = Units[i].description;
            if (Units[i].forSale == true) {
                FormVar.floatingSale.checked = true;
            } else {
                FormVar.floatingSale.checked = false;
            }
            // remove the unit from the array
            Units.splice(i, 1);
            saveUnitsToLocalStorage(Units);

        }
    }
}
