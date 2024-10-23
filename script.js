// Get references to the elements
const elem = document.querySelector('.usa-map-layout');

const LOAD_STARTYEAR = 1990;

// Attach mousemove event
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


const points = [
   {
      name: "Test uni 1",
      information: "Some additional info to this university program",
      x: 0.2345234543,
      y: 0.4356345645,
      startYear: 2000,
      id: 1,
   },
   {
      name: "Test uni 2",
      information: "Some other useful information which can be used to describe the program",
      x: 0.1234123432,
      y: 0.5234234543,
      startYear: 1980,
      id: 2,
   },
   {
      name: "Test uni 3",
      information: "Additional info about this university to showcase the highlights",
      x: 0.8756567867,
      y: 0.3456545345,
      startYear: 1946,
      id: 3,
   },
];


function showUniversities() {
   let mapWrapper = document.querySelector(".map-points");

   mapWrapper.textContent = "";

   points.forEach((point) => {
      let mapPoint = document.createElement("div");
      mapPoint.className = "map-pointer map-pointer-" + point.id;
      mapPoint.style.top = point.y * 100 + "%";
      mapPoint.style.left = point.x * 100 + "%";
      mapPoint.title = point.name;
      mapPoint.onclick = () => showUniversityDetails(point.id);

      if(point.startYear <= LOAD_STARTYEAR) {
         mapPoint.style.display = "inline-block";
      }

      mapWrapper.appendChild(mapPoint);
   });
}

function showUniversitiesForYear(year) {
   points.filter(point => point.startYear <= year).forEach((point) => {
      document.querySelector(".map-pointer-" + point.id).style.display = "inline-block";
   });

   points.filter(point => point.startYear > year).forEach((point) => {
      document.querySelector(".map-pointer-" + point.id).style.display = "none";
   });
}

showUniversities();



function showUniversityDetails(universityId) {
   let universityInformation = points.find(point => point.id == universityId);

   document.querySelectorAll(".active-pointer").forEach(element => {
      element.classList.remove("active-pointer");
   })

   document.querySelector(".info-headline").textContent = universityInformation.name;
   document.querySelector(".info-content").textContent = universityInformation.information;
   document.querySelector(".info-layout").style.display = "flex";
   document.querySelector(`.map-pointer-${universityId}`).classList.add("active-pointer");
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  showUniversitiesForYear(this.value);
}
