// this will be the object model with the following properties : id, title, option (text), year (int), price (int), link (url), image (url), description (text)

/* Changelog
// 2020-11-21 : 
// - changed variable type and implementation in window.onload
// - changed the way that loadUnitsToMemory is called and work
// - set a global variable for units
// - changed the load all units to call loadUnitsToMemory
// - changed all var to let in loadunits
// - changed modifyUnit to use the new units variable and check for undefined or null before modifying
// - changed delette unit to use the new units variable and check for undefined or null before deleting
// - changed modify unit to use the new units variable and check for undefined or null before modifying
// - changed filterType to use the new units variable and check for undefined or null before filtering and use an unit array
// - changed sortBy to use the new units variable and check for undefined or null before sorting and use an unit array
// - changed seed to use the new units variable and check for undefined or null before seeding and use an unit array
// - remover loadall unit to be replaced by loadUnitsToMemory then loadUnits(Units) or with custom array
// - typed all variable in loadunits
// - Changed filter type and sort by to use the new units variable and typed the variable
// - changed seed to use the new units variable and typed the variable
// - changed loadUnitsToMemory to use the new units variable and typed the variable
// - changed saveUnitsToLocalStorage to use the new units variable and typed the variable
// - changed calculateUnits to use the new units variable and typed the variable
// - make that whole script.ts expotable
// - ported to firebase
// - fix the css for mobile
// - fix the css for desktop
// - fix the css for tablet
// - changed the whole file structure
*/
// import css from "..src/asset/style/style.css";



window.onload = function (): void {
    seed();
    Units = loadUnitsToMemory();
    loadUnits(Units);
    //add event to button modify
    const btnModify: HTMLButtonElement = document.getElementById("modify") as HTMLButtonElement;
    btnModify.addEventListener("click", modifyUnit);
    //add event to button delete
    const btnDelete: HTMLButtonElement = document.getElementById("delete") as HTMLButtonElement;
    btnDelete.addEventListener("click", deleteUnit);
    // add event to select type
    const selectType: HTMLSelectElement = document.getElementById("floatingTypeSort") as HTMLSelectElement;
    selectType.addEventListener("change", filterType);
    // add event to sort by
    const selectSort: HTMLSelectElement = document.getElementById("floatingSortBy") as HTMLSelectElement;
    selectSort.addEventListener("change", sortBy);
    // add event to seeddata
    const btnSeedData: HTMLButtonElement = document.getElementById("seed") as HTMLButtonElement;
    btnSeedData.addEventListener("click", seedData);

    calculateUnits();

}

// Will load the units in memory to the page

// interface for the unit object



export interface Unit {
    readonly id: number;
    title: string;
    option: string;
    year: number;
    price: number;
    location: string;
    type: string;
    forSale: boolean;
    link: string;
    image: string;
    description: string;
    
}



// Variable to hold the unit
let Units: Array<Unit> = [];


let highestId: number = 1;


export function highestIdPlusOne(currentHihgestId: number, UnitsList: Array<Unit>): number {
    if (UnitsList.length > 0) {
        for (let i: number = 0; i < UnitsList.length; i++) {
            if (UnitsList[i].id >= currentHihgestId) {
                currentHihgestId = UnitsList[i].id + 1;
            }
        }
    }else{
        currentHihgestId = 1;
    }
    return currentHihgestId;
}

// Will create the units and save them in local storage
export function unitsCreation(title: string, option: string, year: number, price: number,
    location: string, type: string, forSale: boolean, link: string, image: string, description: string, unitsList: Array<Unit>): void {
    // if seed is true, then we will create the units

    // compare all id to find the highest id
    highestId = highestIdPlusOne(highestId, Units);


    // create the units
    let unitToPush: Unit = {
        id: highestId,
        title: title,
        option: option,
        year: year,
        price: price,
        location: location,
        type: type,
        forSale: forSale,
        link: link,
        image: image,
        description: description
    };
    unitsList.push(unitToPush);

    saveUnitsToLocalStorage(unitsList);



}




export function seed(reSeed = false): void {

    if (reSeed) {
        Units = [];
        saveUnitsToLocalStorage(Units);
    }
    // if local storage is empy
    if (localStorage.getItem("units") == null || localStorage.getItem("units") == undefined || reSeed == true) {
        unitsCreation("Loader 644k John Deere",
            "a/x, GPS",
            2018,
            100000,
            "Montreal",
            "Loader",
            true,
            "https://www.https://www.ritchiespecs.com/model/john-deere-644k-high-lift-wheel-loader.com", "https://i.ytimg.com/vi/_MVJIyq_OWo/maxresdefault.jpg",
            "This is the description for unit 1. It is a long established fact that a reader will be distracted by the readable content of a page when looking" +
            "at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
            , Units);

        Units = loadUnitsToMemory();
        unitsCreation(
            "Toyota 05-8FBM30T Forklift",
            "Cabin, ",
            2018,
            54000,
            "Drummondville",
            "Forklift",
            true,
            "https://www.https://www.ritchiespecs.com/model/toyota-05-8fbm30t-forklift.com",
            "https://northstarforklift.com/wp-content/uploads/2018/07/toyota-forklift7.jpg",
            "This is the description for unit 2 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            Units);
        
            Units = loadUnitsToMemory();
        unitsCreation(
            "Komatsu Excavator pc200lc",
            "a/c, Gps",
            2018,
            10000,
            "Montreal",
            "Excavator",
            true,
            "https://https://www.ritchiespecs.com/model/komatsu-pc200lc-8-hydraulic-excavator.google.com",
            "https://costhack.com/wp-content/uploads/2020/03/Komatsu-Excavators-Featured.jpg",
            "This is the description for unit 3 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
       , Units);
       Units = loadUnitsToMemory();
        unitsCreation(
            "Loader 544 k John Deere",
            "a/c, Gps",
            2019,
            100000,
            "Quebec",
            "Loader",
            true,
            "https://www.ritchiespecs.com/model/john-deere-544k-high-lift-wheel-loader",
            "https://media.sandhills.com/img.axd?id=7264859102&wid=4326185391&rwl=False&p=&ext=&w=0&h=0&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=H2JO5SySCf5HMNqc6ODaayPBiAv8djWfl0qmOhk0UQU%3D",
            "This is the description for unit 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        , Units);
        Units = loadUnitsToMemory();
        unitsCreation(
            "cat CP54B",
            "Laser niveling",
            2017,
            254000,
            "Pierreville",
            "Soil Compactor",
            false,
            "https://www.ritchiespecs.com/model/cat-cp54b-soil-compactor",
            "https://www.petersoncat.com/sites/cat/files/products/gallery/31081-1.jpg",
            "This is the description for unit 5. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
        , Units);



        localStorage.setItem("units", JSON.stringify(Units));
    }
}


export function seedData(): void {

    seed(true);
    loadUnits(Units);

}

// Will read the units in local storage and put it in memory
export function loadUnitsToMemory(): Array<Unit> {
    let UnitsToLoad: Array<Unit>
    if (localStorage.getItem("units") != null) {
        UnitsToLoad = JSON.parse(localStorage.getItem("units")!);
    } else {
        seed();
        UnitsToLoad = loadUnitsToMemory();
    }
    UnitsToLoad.sort(function (a, b) {
        return a.id - b.id;
    });
    return UnitsToLoad;

}

// Will save the units in memory to local storage
export function saveUnitsToLocalStorage(UnitsToSave: Array<Unit>): void {

    localStorage.setItem("units", JSON.stringify(UnitsToSave));

}


// This will run function and event call when the page is loaded



//this function will get the units from local storage and show it in my class aside, the image link will display the image in a box
function loadUnits(units: Array<Unit>): void {

    //var units = JSON.parse(localStorage.getItem("units"));
    let unitsList = document.getElementById("tableUnits") as HTMLTableElement;
    unitsList.innerHTML = "";


    for (let i = 0; i < units.length; i++) {

        let unit: Unit = units[i];
        let itemDiv: HTMLElement = document.createElement("div");
        //give div a class name
        itemDiv.className = "itemUnits";
        itemDiv.id = "itemUnits" + unit.id;
        // create div within itemDiv
        let picDiv: HTMLElement = document.createElement("div");
        picDiv.className = "picUnits";
        // create image within picDiv
        let pic: HTMLImageElement = document.createElement("img");
        pic.className = "imgUnits";
        pic.src = unit.image;

        picDiv.appendChild(pic);
        // create div within itemDiv
        let linkDiv: HTMLElement = document.createElement("div");
        linkDiv.className = "linkUnits";
        // create link within linkDiv
        let link: HTMLAnchorElement = document.createElement("a");
        link.href = unit.link;
        link.innerHTML = "Specs : " + unit.link;
        linkDiv.appendChild(link);
        // create div within itemDiv
        let descDiv: HTMLElement = document.createElement("div");
        descDiv.className = "descUnits";
        // create paragraph within descDiv
        let desc: HTMLElement = document.createElement("p");
        desc.innerHTML = unit.description;
        descDiv.appendChild(desc);
        // create div within itemDiv
        let infoDiv: HTMLElement = document.createElement("div");
        infoDiv.className = "infoUnits";
        // create div withing infoDiv
        let titleDiv: HTMLElement = document.createElement("div");
        titleDiv.className = "titleUnits bold";
        // create h1 within titleDiv
        let title: HTMLElement = document.createElement("p");
        title.innerHTML = unit.title;
        titleDiv.appendChild(title);

        // create div withing infoDiv
        let priceDiv: HTMLElement = document.createElement("div");
        priceDiv.className = "priceUnits";
        // create p within priceDiv
        let price: HTMLElement = document.createElement("p");
        price.innerHTML = unit.price + " $";
        priceDiv.appendChild(price);
        // create div withing infoDiv
        let locationDiv: HTMLElement = document.createElement("div");
        locationDiv.className = "locationUnits";
        // create p within locationDiv
        let location: HTMLElement = document.createElement("p");
        location.innerHTML = "Location : " + unit.location;
        locationDiv.appendChild(location);
        // create div withing infoDiv
        let typeDiv: HTMLElement = document.createElement("div");
        typeDiv.className = "typeUnits";
        // create p within typeDiv
        let type: HTMLElement = document.createElement("p");
        type.innerHTML = "Type : " + unit.type;
        typeDiv.appendChild(type);
        // create div withing infoDiv
        let optionDiv: HTMLElement = document.createElement("div");
        optionDiv.className = "optionUnits";
        // create p within optionDiv
        let option: HTMLElement = document.createElement("p");
        option.innerHTML = "Option : " + unit.option;
        optionDiv.appendChild(option);
        // create div withing infoDiv
        let yearDiv: HTMLElement = document.createElement("div");
        yearDiv.className = "yearUnits";
        // create p within yearDiv
        let year: HTMLElement = document.createElement("p");
        year.innerHTML = "Year : " + unit.year;
        yearDiv.appendChild(year);
        // create div withing infoDiv
        let idDiv: HTMLElement = document.createElement("div");
        idDiv.className = "idUnits";
        // create p within idDiv
        let id: HTMLElement = document.createElement("p");
        id.innerHTML = "Id : " + unit.id;
        idDiv.appendChild(id);
        // create div withing infoDiv


        // create p within linkDiv

        // create div withing infoDiv
        let forSaleDiv: HTMLElement = document.createElement("div");
        forSaleDiv.className = "forsaleUnits";
        // create p within forSaleDiv
        let forSale: HTMLElement = document.createElement("p");
        forSale.innerHTML = "still for sale :" + unit.forSale;
        forSaleDiv.appendChild(forSale);


        // append all the div to itemDiv
        itemDiv.appendChild(linkDiv);
        itemDiv.appendChild(picDiv);

        itemDiv.appendChild(descDiv);
        itemDiv.appendChild(infoDiv);
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(priceDiv);
        infoDiv.appendChild(locationDiv);
        infoDiv.appendChild(typeDiv);
        infoDiv.appendChild(optionDiv);
        infoDiv.appendChild(yearDiv);
        infoDiv.appendChild(idDiv);
        infoDiv.appendChild(forSaleDiv);
        unitsList.appendChild(itemDiv);

        calculateUnits();
    }


}



//this function will ask for a valid id and will store the id in local storage and direct you to modify.html
export function modifyUnit():void {

    let idToModify: string;

    do {

        idToModify = prompt("Enter the id of the unit you want to modify, a number please") as string;

    } while (idToModify == "" || isNaN(Number(idToModify)) || Number(idToModify) < 0);

    // check if the id exist
    if (idToModify != null) {

        Units = loadUnitsToMemory();

        let found: boolean = false;
        if (Units.length > 0) {

            for (let i: number = 0; i < Units.length; i++) {
                if (Units[i].id == +idToModify) {
                    found = true;
                    break;
                }
            }

        }

        if (!found) {
            alert("Id not found");
        } else {

            if (idToModify != null) {

                localStorage.setItem("idToModify", idToModify);
                window.location.href = "./src/pages/modify/index.html";
                
            }
        }

    }

}


// this fuction will ask for a id to delete and will delete the unit with that id
export function deleteUnit():void {
    let idToDelete: string;
    do {
        idToDelete = prompt("Enter the id of the unit you want to delete, a number please") as string;


    } while (idToDelete == "" || isNaN(Number(idToDelete)) || Number(idToDelete) < 0);

    if (idToDelete != null) {
        // check if the id is a number and if it exist
        Units = loadUnitsToMemory();
        let found: boolean = false;
        if (Units.length > 0) {
            for (let i = 0; i < Units.length; i++) {
                if (Units[i].id == +idToDelete) {
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            alert("Id not found");
        } else {
            if (idToDelete != null) {
                for (let i: number = 0; i < Units.length; i++) {
                    if (Units[i].id == +idToDelete) {
                        Units.splice(i, 1);
                        localStorage.setItem("units", JSON.stringify(Units));
                        Units = loadUnitsToMemory();
                        alert("Unit deleted");
                        break;
                    }
                }
            }
        }
    }
    Units = loadUnitsToMemory();
    loadUnits(Units)
}




function filterType():void {
    let floatingSortBy: HTMLSelectElement = document.getElementById("floatingTypeSort") as HTMLSelectElement;

    let sortBy: HTMLSelectElement = document.getElementById("floatingSortBy") as HTMLSelectElement;

    sortBy.value = "None";

    let type: string = floatingSortBy.value;
    console.log(type);
    if (type == "All") {
        Units = loadUnitsToMemory();
        loadUnits(Units);
        return;
    }
    Units = loadUnitsToMemory();
    let filteredUnits: Array<Unit> = [];
    for (var i = 0; i < Units.length; i++) {
        if (Units[i].type == type) {
            filteredUnits.push(Units[i]);
        }
    }
    loadUnits(filteredUnits);
}

function sortBy():void {
    let floatingSortBy: HTMLSelectElement = document.getElementById("floatingTypeSort") as HTMLSelectElement;
    floatingSortBy.value = "All";


    let sortBy: HTMLSelectElement = document.getElementById("floatingSortBy") as HTMLSelectElement;

    let sortByValue: string = sortBy.value;



    if (sortByValue == "None" || sortByValue == "All") {
        loadUnits(Units);
        return;
    }
    Units = loadUnitsToMemory();
    // sort by price all the units
    if (sortByValue == "PriceUp") {
        Units.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    if (sortByValue == "PriceDown") {
        Units.sort(function (a, b) {
            return b.price - a.price;
        });
    }
    if (sortByValue == "YearUp") {
        Units.sort(function (a, b) {
            return a.year - b.year;
        });
    }
    if (sortByValue == "YearDown") {
        Units.sort(function (a, b) {
            return b.year - a.year;
        });
    }
    if (sortByValue == "IdUp") {
        Units.sort(function (a, b) {
            return a.id - b.id;
        });
    }
    if (sortByValue == "IdDown") {
        Units.sort(function (a, b) {
            return b.id - a.id;
        });
    }

    loadUnits(Units);
    
    calculateUnits();


}

// will calculate all unit and set it in the label of the text box
export function calculateUnits():void {

    Units = loadUnitsToMemory();

    let totalUnits: HTMLInputElement = document.getElementById("floatingIdCount") as HTMLInputElement;

    // if there is no units
    if (Units == undefined || Units == null || Units.length == 0) {

        totalUnits.value = "0";

        return;
    }

    let total: number = 0;
    for (let i: number = 0; i < Units.length; i++) {
        total++;
    }


    totalUnits.value = total.toString();

}







