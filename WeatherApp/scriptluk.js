fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
        
        feels_likek.innerHTML= response.feels_like
        humidityk.innerHTML= response.humidity
        max_tempk.innerHTML= response.max_temp
        min_tempk.innerHTML= response.min_temp
        sunrisek.innerHTML= response.sunrise
        sunsetk.innerHTML= response.sunset
        tempk.innerHTML= response.temp
        wind_degreesk.innerHTML= response.wind_degrees
        wind_speedk.innerHTML= response.wind_speed
    
    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
        
        feels_likel.innerHTML= response.feels_like
        humidityl.innerHTML= response.humidity
        max_templ.innerHTML= response.max_temp
        min_templ.innerHTML= response.min_temp
        sunrisel.innerHTML= response.sunrise
        sunsetl.innerHTML= response.sunset
        templ.innerHTML= response.temp
        wind_degreesl.innerHTML= response.wind_degrees
        wind_speedl.innerHTML= response.wind_speed
    
    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna', options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
        
        feels_likep.innerHTML= response.feels_like
        humidityp.innerHTML= response.humidity
        max_tempp.innerHTML= response.max_temp
        min_tempp.innerHTML= response.min_temp
        sunrisep.innerHTML= response.sunrise
        sunsetp.innerHTML= response.sunset
        tempp.innerHTML= response.temp
        wind_degreesp.innerHTML= response.wind_degrees
        wind_speedp.innerHTML= response.wind_speed
    
    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
        
        feels_likem.innerHTML= response.feels_like
        humiditym.innerHTML= response.humidity
        max_tempm.innerHTML= response.max_temp
        min_tempm.innerHTML= response.min_temp
        sunrisem.innerHTML= response.sunrise
        sunsetm.innerHTML= response.sunset
        tempm.innerHTML= response.temp
        wind_degreesm.innerHTML= response.wind_degrees
        wind_speedm.innerHTML= response.wind_speed
    
    })
	.catch(err => console.error(err));