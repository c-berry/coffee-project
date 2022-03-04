"use strict"

// THIS WILL ADD CONTENT TO EMPTY DIVS DISPLAYING COFFEES:
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    //THIS CLASS WILL HIDE ALL ID'S:
    html += '<div class="d-none">' + coffee.id + '</div>';
    html += '<div class="name"><p>' + coffee.name + '</p></div>';
    html += '<p class="roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    //CYCLES THRU AND DISPLAYS LIGHT ROASTS ON PAGE INSIDE DIV:
    for(var i = 0; i < coffees.length; i++) {
        if (coffees[i].roast === "light") {
        html += renderCoffee(coffees[i]);
        }
    }
    //CYCLES THRU AND DISPLAYS MEDIUM ROASTS ON PAGE INSIDE DIV:
    for(var j = 0; j < coffees.length; j++) {
        if (coffees[j].roast === "medium") {
            html += renderCoffee(coffees[j]);
        }
    }
    //CYCLES THRU AND DISPLAYS DARK ROASTS ON PAGE INSIDE DIV:
    for(var k = 0; k < coffees.length; k++) {
        if (coffees[k].roast === "dark") {
            html += renderCoffee(coffees[k]);
    }
}
    return html;
}

function updateCoffees(e) {
    //POTENTIALLY USEFUL FOR PAGES WITH NO BACKEND:
    if (e !== undefined) {
        e.preventDefault();
    } // don't submit the form, we just want to update the data
    //ADDED VARIABLE (searchCoffee)
    var searchCoffee = coffeeSearch.value; //.value PULLS INFO FROM coffeeSearch variable
    var selectedRoast = roastSelection.value; //.value IS ESSENTIAL!
    //NEW ARRAY CREATED BASED OFF USER INPUT SEARCH BY COFFEE NAME:
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        //THIS IF STATEMENT SEARCHES THRU SPECIFIC ROAST TYPE:
        if ((coffee.name.toLowerCase()).includes(searchCoffee.toLowerCase()) && coffee.roast === selectedRoast) {
            //PUSHED SEARCH RESULTS TO filteredCoffees ARRAY :
            filteredCoffees.push(coffee);
        }
        //THIS STATEMENT SEARCHES THROUGH ALL:
        else if((coffee.name.toLowerCase()).includes(searchCoffee.toLowerCase()) && selectedRoast === "all") {
            //PUSHED RESULTS TO filteredCoffees ARRAY :
            filteredCoffees.push(coffee);
        }
    });
    //CHANGES CONTENTS OF coffeeList TO REFLECT NEW ARRAY:
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

//FUNCTION CREATING AND ADDING NEW COFFEE BASED ON USER INPUT:
function createCoffee(e) {
    e.preventDefault();
    // RETRIEVES NEW COFFEE NAME FROM USER INPUT:
    var newCoffeeName = document.querySelector("#new-coffee-name").value;
    //RETRIEVES ROAST TYPE FROM DROPDOWN SELECTOR REGARDING NEW COFFEE NAME:
    var newCoffeeRoast = document.querySelector("#new-coffee-roast").value;
    //CREATES NEW OBJECT TO BE PUSHED TO ARRAY OF COFFEE OBJECTS:
    var newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName,
        roast: newCoffeeRoast
    }
    //PUSHES NEW COFFEE TO ARRAY:
    coffees.push(newCoffee);
    //ALLOWS SEARCHBAR TO RECOGNIZE NEW COFFEE INPUT:
    updateCoffees();
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

//ARRAY OF OBJECTS:
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//THIS VARIABLE CONTAINS CONTENTS OF DIV WITH #coffees:
var coffeeList = document.querySelector('#coffees');

var submitButton = document.querySelector('#submit');
//THIS VARIABLE RETRIEVES USER INPUT FROM OPTION DROPDOWN SELECTOR:
var roastSelection = document.querySelector('#roast-selection');
//NEW VARIABLES:
//THIS VARIABLE RETRIEVES USER INPUT UPON COFFEE NAME SEARCH:
var coffeeSearch = document.getElementById("coffee-name");
//THIS VAR RETRIEVES SUBMITTED INFO OF NEW COFFEE:
var newCoffeeSubmit = document.querySelector("#new-coffee-button");

//CHANGES CONTENTS OF coffeeList:
coffeeList.innerHTML = renderCoffees(coffees);
//ACTIVATES UPON CLICK OF FIRST SUBMIT BUTTON:
submitButton.addEventListener('click', updateCoffees);
//ACTIVATES UPON CLICK OF NEW COFFEE SUBMIT BUTTON:
newCoffeeSubmit.addEventListener("click", createCoffee);

// UPDATE CONTENT ON SELECTOR INPUT:
roastSelection.addEventListener('change', updateCoffees);
// UPDATE CONTENT ON KEYPRESS IN REALTIME:
// coffeeSearch.addEventListener('keyup', updateCoffees);

