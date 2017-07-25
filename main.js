

let main = document.querySelector(".results")
let search = document.querySelector("#search")
let form = document.querySelector('button')

form.addEventListener('click', function(e){
	e.preventDefault()

	let term = search.value
	find(term)

})

function find(term) {
	console.log (term)
fetch("https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=" + term + "&includes=Images,Shop")
.then (
		function (response){
			if(response.status!== 200) {
				console.log(response.status)
				return;
			} 
			response.json().then(function(data){
				let list = ''

				let rl = data.results.length
				let sr = document.querySelector('.results_bar')
				
				sr.innerHTML = "All categories > " + "'" +term+ "'" + " ("+rl+ " Results)"
				
				let counter = 0
				data.results.forEach(function(data){
					console.log(data)
					list += `
								<div class="data">
									<img src="${data.Images[0].url_170x135}"/>
									<div class="inside_content">
									<li> ${data.title}</li>
									<li id="shop_name"> ${data.Shop.shop_name}</li>
									<li id="price"> $${data.price}</li>
									<a href="${data.url}"></a>
									</div>
								</div>
							</div>
							`
					})
					main.innerHTML += list
					})

			})	
		}
