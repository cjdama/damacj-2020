$('#app2').html(`
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
	url: "http://www.omdbapi.com/?i=tt0309593"

}).done(function(res){
	console.log(res);


let html = `

  <h1>${res.Title}</h1>
  <img src="${res.Poster}"/>
  <h3>${res.Plot}</h3>
  <h4>${res.Director}</h4>
  <h5>${res.Writer}</h5>
  <h6>${res.Actors}</h6>
`;

$('#app2').html(html);
});
}