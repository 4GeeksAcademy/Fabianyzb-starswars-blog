const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		caracteres: [],
		planets:[],
		vehiculos:[],
		favoritos:[]
	  },
  
	  actions: {

			getPlanets: async ()=>{
				const planetsUrl = "https://www.swapi.tech/api/planets"
				let planets = []
				let resp = await fetch(planetsUrl)

				// Cargando la lista de los planetas 
				try {

					if (!resp.ok){
						console.error(resp.status + ":" + resp.statusText)
						return 
					}
					let data = await resp.json()
					planets = data.results
				} catch (error) {
				console.error(error)
					return
				}
				// Cargando los detalles de los planetas
				planets = planets.map(planet => fetch(planet.url))
				try {
					let respuestas = await Promise.all(planets)
					if (respuestas.every(respuesta => respuesta.ok)){
						console.log("Todas las respuestas Ok")
						respuestas = respuestas.map(respuesta => respuesta.json())
						let data = await Promise.all(respuestas)
						data = data.map(planet =>{
							let { description, uid, _id, properties } = planet.result
							return { 
								description,
								 uid,
								 _id, 
								 img: `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`,
								 ... properties}
						})
						setStore({planets: data})
					}
				} catch (error) {
					console.error(error)
					return
				}


				},
			getCaracteres: async ()=>{
				const caracteresUrl = "https://www.swapi.tech/api/people"
				let caracteres = []
				let resp = await fetch(caracteresUrl)

				// Cargando la lista de los planetas 
				try {

					if (!resp.ok){
						console.error(resp.status + ":" + resp.statusText)
						return 
					}
					let data = await resp.json()
					caracteres = data.results
				} catch (error) {
				
					return
				}
				// Cargando los detalles de los planetas
				caracteres = caracteres.map(caracter => fetch(caracter.url))
				try {
					let respuestas = await Promise.all(caracteres)
					if (respuestas.every(respuesta => respuesta.ok)){
						console.log("Todas las respuestas Ok")
						respuestas = respuestas.map(respuesta => respuesta.json())
						let data = await Promise.all(respuestas)
						data = data.map(caracter =>{
							let { description, uid, _id, properties } = caracter.result
							return { 
								description,
								 uid,
								 _id, 
								 img: `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg` ,
								 ... properties}
						})
						setStore({caracteres: data})
					}
				} catch (error) {

				console.error(error)
				}


			},
			getVehiculos: async ()=>{
				const vehiculosUrl = "https://www.swapi.tech/api/starships"
				let vehiculos = []
				let resp = await fetch(vehiculosUrl)

				// Cargando la lista de los Vehiculos 
				try {

					if (!resp.ok){
						console.error(resp.status + ":" + resp.statusText)
						return 
					}
					let data = await resp.json()
					vehiculos = data.results
				} catch (error) {
				
					return
				}
				// Cargando los detalles de los planetas
				vehiculos = vehiculos.map(vehiculo => fetch(vehiculo.url))
				try {
					let respuestas = await Promise.all(vehiculos)
					if (respuestas.every(respuesta => respuesta.ok)){
						console.log("Todas las respuestas Ok")
						respuestas = respuestas.map(respuesta => respuesta.json())
						let data = await Promise.all(respuestas)
						data = data.map(vehiculo =>{
							let { description, uid, _id, properties } = vehiculo.result
							return { 
								description,
								 uid,
								 _id, 
								 img: `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg` ,
								 ... properties}
						})
						setStore({vehiculos: data})
					}
				} catch (error) {

				console.error(error)
				}


			},
			setFavorito: (favorito)=>{
				let { favoritos } = getStore()
				setStore({favoritos: [...favoritos, favorito] })
				
			},
			deleteFavorito: async (deleteItem) => {
					let { favoritos } = getStore()
					let newlist = favoritos.filter((el) => el.name !== deleteItem.name) 
					setStore({favoritos:newlist})
				
			}, 

			errorImg: (e)=>{
				e.target.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
			}
		
				
			
			
		}
	}

}	
	
			
		
	
	  
	
  
  
export default getState;
  