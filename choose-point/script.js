

// Get references to the elements
const elem = document.querySelector(".usa-map-layout");

const LOAD_STARTYEAR = 1990;

// // Attach mousemove event
elem.addEventListener('click', function(event){

   // Get the target
   const target = event.target;

   // Get the bounding client
   const rect = target.getBoundingClientRect();

   const elementWith = elem.offsetWidth;
   const elementHeight = elem.offsetHeight;

   // Get X & Y coordinates
   let xPos = event.clientX - rect.left;
   let yPos = event.clientY - rect.top;

   alert(xPos/elementWith + ";" +  yPos/elementHeight);
});
