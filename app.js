$('#app').html(`
	<center>
	 <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>

</center>
 
	`);

//$('#app').html(`
//	<div class="loader"></div>
//	`);

setTimeout(function(){
x();
},3000);


function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt0195714"
}).done(function(res){
	console.log(res);


let html = `

  <h1>${res.Title}
  ${res.Year}</h1>
  <h2>${res.Genre}</h2>
  <img src="${res.Poster}"/>
  <h3>${res.Plot}</h3>
  <h4>${res.Director}</h4>
  <h5>${res.Writer}</h5>
  <h6>${res.Actors}</h6>
  <h7>${res.Released}</h7>
`;

$('#app').html(html);
});
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}