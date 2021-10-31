// Variables
const form = document.getElementById('request-quote');
const html = new HTMLUI();



// Event Listeners

eventListeners();
function eventListeners() {
document.addEventListener('DOMContentLoaded', function() {
    // Create the <option> for the years
  
   html.displayyears();
 });
 

 //When the form is submitted
 form.addEventListener('submit', function(e) {
     e.preventDefault();

     //Read the Values from the form
     const make = document.getElementById('make').value;
     const year = document.getElementById('year').value;
     //Read the radio buttons
     const level = document.querySelector('input[name="level"]:checked').value;

     //Check that all the fields have something
     if( make === ' ' || year === '' || level === '' ) {
        html.displayError('All the fields are mandatory');

     }else {
         // Create the previos qoutes

         const prevResult = document.querySelector('#result div');
         if (prevResult != null){
            prevResult.remove;

         }
         // Make the quotation
         const insurance = new Insurance(make,year, level );
         const price = insurance.calculateQuotation(insurance);

        // Print the resukt from HTMLUI();
        html.showResults(price, insurance);
     }
 });
  
}
 
 
 // Objects

 // Everything related to the quotation and calculations is insurance
 function Insurancefunction(make, year, level){
     this.make = make;
     this.year = year;
     this.level = level;
 }
// Calculate the price for the current qoutation
Insurance.prototype.calculationquotation = function(insurance) {
    let price;
    const base = 2000;

    // get the make
    const make = insurance.make;

    /*
        1 = American 15%
        2 = Asian 05%
        3 = European 35%
     */
    
    switch(make) {
        case '1':
            price = base = 1.15;
            break;
        case '2':
             price = base = 1.05;
            break;
         case '3':
            price = base = 1.35;
            break;
    
    }
      //Get the year
      const year = insurance.year;

      const difference = this.getYearDifference(year);

      // Each year the case of the insurance is going to be 3% cheaper
      price = price - ([difference * 3] * price) / 100;

    // Check the level of the protection
    const level = insurance.level

     price = tis.calculateLevel(price, level);

    return price;

}
// Returns the difference
Insurance.prototype.getYearDifference = function(year) {

}
    return new Date().getFullYear() - year;

// Adds the value based on the level of protection
Insurance.prototype.calculateLevel = function(price, Level) {
    /*
    Basic Insurance is going to increase the value by 30%
    Complete Insurance is going to increase the value by 50%
    */
   if(level === 'basic') {
       price = price = 1.30;
   } else {
       price= price * 1.50;
       
       return price;
   }
}

 // Everything related to the HTML
 function HTMLUI() {}
 
 // Displays the latest 20 years in the select
 HTMLUI.prototype.displayYears = function() {
     // Max & minimum years
     const max = new Date().getFullYear(),
           min = max - 20;  
 
  // Generate the list with the latent 20 years
     const selectYears = document.getElementById('year');
 
 // Print the Value
     for (let i = max; i > min; i-- ) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
 }
 
 // Prints an error

 HTMLUI.prototype.displayError = function(message) {
     // create a div
     const div = document.createElement('div');
     div.classList = 'error';

     // insert the message
     div.innerHTML = `
         <p>${message}</p>
     `;

     form.insertBefore(div, document.querySelector('.forms-group') );

     //Remove the error
     setTimeout(function(){
         document.querySelector('.error').remove();
     },3000);
 }

 // Prints the result into the HTML
 HTMLUI.prototype.showResults = function(prince, insurance) {
     // Print the result
     const result = document.getElementById('result');

     // create a div with the result
     const div = document.getElementById('result');
     const make = insurance.make;
     // Get Make from the object and assin a readable name
     let make = insurance.make;

     switch (make) {
         case '1':
             make = 'American';
             break;
        case '2':
            make = 'Asian';
            break;
        case '3':
            make = 'Europea';
            break;

     }
    


     // create = document.createElement('div');

     //Insert the result
     div.innerHTML = `
     <p class"header">Summary</p>
     <p>Make: ${make}</p>
     <p>Year: ${insurance.year}</p>
     >p<Level: ${insurance.level}</p>
     <p class="total">Total: $ ${price}</p>
     `;

     const spinner =document.querySelector('#loading ing');
     spinner.style.display = 'block';

     setTimeout(function() {
         spinner.style.display = 'none';
         // Insert this into the HTML
         result.appendChild(div);
     },3000);
   
     
 }


