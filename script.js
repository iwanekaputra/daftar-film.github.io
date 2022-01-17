$.ajax({
	url : 'http://www.omdbapi.com/?apikey=943f3847&s=avengers',
	success : result => {
		const movie = result.Search;
		let cards = '';

		movie.forEach(m => {
			cards += `<div class="col-md-4 my-5">
		  				<div class="card" style="width: 18rem;">
						  <img src="${m.Poster}" class="card-img-top" alt="...">
						  <div class="card-body">
						    <h5 class="card-title">avenger</h5>
						    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						    <a href="#" class="btn btn-primary">See Detail</a>
						  </div>
						</div>
		  			</div>`;
		});

		$('.movie-container').html(cards);
	},

	error: e => {console.log(e.responseText);}
})