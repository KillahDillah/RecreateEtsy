

let main = document.querySelector(".content")
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
				data.results.forEach(function(data){
					console.log(data)
					list += `
								<div class="data">
									<img src="${data.Images[0].url_170x135}"/>
									<li> ${data.title}</li>
									<li> ${data.Shop.shop_name}</li>
									<li> $${data.price}</li>
									<a href="${data.url}"></a>
									
								</div>
							</div>
							`
					})

					main.innerHTML += list
						
					})
			})

				
		}
