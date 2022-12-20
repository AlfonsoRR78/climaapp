let weather = {
    apikey: '75b171e1b4fab2550936b474866db119',
    fetchweather: function (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&lang=es&units=metric&appid=' + this.apikey)
        .then((respuesta) => {
        if (!respuesta.ok) {
          alert("Ciudad no encontrada");
        }
        return respuesta.json();
      })
    .then((clima)=>this.obtenerclima(clima))     
            
},
    obtenerclima: function(clima){
        const { temp } = clima.main
        document.querySelector("#temperatura1").innerText=temp + "°C"
        document.querySelector("#tempfar").innerText= Math.trunc (temp*9/5+(32)) + "°F"
        console.log (temp)
        const { name } = clima
        console.log (name)
        document.querySelector("#ciudad1").innerText="Temperatura Actual en "+ name 
        const { temp_min } = clima.main
        console.log (temp_min)
        document.querySelector("#tempmin1") .innerText= "Temperatura minima sera de " + temp_min + "°"
        const { temp_max } = clima.main
        console.log (temp_max)
        document.querySelector("#tempmax1") .innerText= "Temperatura maxima sera de " + temp_max + "°"
        const { description } = clima.weather [0]
        console.log (description)
        document.querySelector("#nubosidad1") .innerText= "Descripcion del cielo " + description
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x1150/?" + name + "')";
    },
 }

let ciudad=document.querySelector(".busqueda-barra")
console.log (ciudad)
let boton=document.querySelector("#button1")
boton.addEventListener("click", ()=>{
    weather.fetchweather(ciudad.value)
})

