let weather = {
    apikey: '75b171e1b4fab2550936b474866db119',
    fetchweather: function (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=' + this.apikey)
    .then((respuesta) => respuesta.json())
    .then((clima)=>this.obtenerclima(clima))     
},
    obtenerclima: function(clima){
        const { temp } = clima.main
        document.querySelector("#temperatura1").innerText=temp + " °C"
        console.log (temp)
        const { name } = clima
        console.log (name)
        document.querySelector("#ciudad1").innerText="Temperatura Actual en "+ name  
    },
 }
let ciudad=document.querySelector(".busqueda-barra")
console.log (ciudad)
let boton=document.querySelector("#button1")

boton.addEventListener("click", ()=>{
    weather.fetchweather(ciudad.value)
    
})
