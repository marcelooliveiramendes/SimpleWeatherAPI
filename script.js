document.querySelector("#btn").addEventListener("click", () => {
    let API_KEY = '7d9eeb8ace209da0d28e33e2dd6d0fcf';
    let location = document.querySelector("#city").value;
    var info = '';

    const getData = async () => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(res => {return res})

        if(data.cod == "404"){
            alert("Cidade não encontrada!");
        } else {
            info = data;
            showData()
            console.log(info);
        }
    }

    if(location){
        getData()
    } else {
        alert("Campo inválido ou vazio!")
    }

    const showData = () => {
        document.querySelector(".city-info").style.display = "flex"
        document.querySelector("#cityName").innerHTML = info.name
        document.querySelector("#temp").innerHTML =  `${info.main.temp.toFixed(0)}°`
        document.querySelector("#status").innerHTML = info.weather[0].description
        document.querySelector("#media").innerHTML = `Min: ${info.main.temp_min.toFixed(0)}° / Max: ${info.main.temp_max.toFixed(0)}°`
    }


})
