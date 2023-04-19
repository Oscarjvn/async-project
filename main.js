const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCwbg5tooaBpA2EYqjUpa0zw&part=snippet%2Cid&order=date&maxResults=9'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c792a387f9mshc4afc0314716b73p1cfbb9jsn727f446971e5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


fetch(API,options )
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))



const  contenedor = document.getElementById("contenedor")
async function fetchData(urlApi, op){
    const response =  await fetch(urlApi, op);
    const data = await response.json()
    return data
}




(async () => {
    try {
        const videos = await fetchData(API,options)
    let view= `${videos.items.map(video => `<div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>`).join("")}`
  console.log(view)
  //let div = document.createElement("div")
  contenedor.innerHTML = view
  //contenedor.appendChild(div)
  
    } catch (error) {
        contenedor.textContent = "Algo ha ido mal, quedate con nostros enseguida lo solucionamos"
    }
   
})()