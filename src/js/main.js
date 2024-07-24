$('.menu').on('click', function() {
    $('.hidden-menu').toggleClass('hidden');
    $('.hidden-menu').toggleClass('animate__animated animate__backInDown');

});

$('.search').on('keyup',function(event){
    searchWeather(event.target.value)
})

async function searchWeather(country){
    
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${country}&days=3`);
        if (!response.ok) {
            throw new Error (`HTTP error status : ${response.status}`);
        }else{
            let data = await response.json();
            if(data){
                console.log(data);
                display(data);
            }
        }

        }catch(err){
        console.log(`fetch error : ${err}`)
    }
}
function display(data){
    var e = new Date(data.current.last_updated.replace(" ", "T"));
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    content = 
    `
        <div class="forcast-content  w-full flex flex-col">
            <div class="header text-center bg-darker-secondary  py-2 px-2">
                <div class="flex justify-between">
                    <span>${days[e.getDay()]}</span>
                    <span>${e.getDate() + monthNames[e.getMonth()]}</span>
                </div>
            </div>
            <div class="py-4 px-2">
                <h3>${data.location.name}</h3>
                <div class="flex items-center sm:flex-col md:flex-row py-3">
                    <h2 class="text-8xl font-extrabold">${data.current.temp_c}<sup>o</sup>C</h2>
                    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" class="w-20">
                </div>
                <span class="text-hover-color py-3">${data.current.condition.text}</span>
                <div class="flex sm:flex-col md:flex-row gap-3 py-3">
                    <span>
                        <img src="../../assets/icon-umberella.png" alt="Umbrella Icon" />
                        20%
                    </span>
                    <span>
                        <img src="../../assets/icon-wind.png" alt="Wind Icon" />
                        18km/h
                    </span>
                    <span>
                        <img src="../../assets/icon-compass.png" alt="Compass Icon" />
                        East
                    </span>
                </div>
            </div>
        </div>

        <!-- Day 1 Forecast -->
        <div class="forcast-content bg-darker-secondary-opacity text-center flex flex-col justify-between w-full">
            <div class="header text-center bg-main-color py-2 px-2">
                    <h4>${days[new Date(data.forecast.forecastday[1].date.replace(" ", "T")).getDay()]}</h4>
            </div>
            <div class="py-4 px-2 flex flex-col justify-center items-center">
                <img src="${data.forecast.forecastday[1].day.condition.icon}" class="w-20" />
                <h2 class="text-5xl font-bold py-2">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
                <div class="flex flex-col gap-2 py-3">
                    <span>${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</span>
                    <span class="text-hover-color">${data.forecast.forecastday[1].day.condition.text}</span>
                </div>
            </div>
        </div>

        <!-- Day 2 Forecast -->
        <div class="forcast-content text-center flex flex-col justify-between w-full">
            <div class="header text-center bg-darker-secondary py-2 px-2">
                        <h4>${days[new Date(data.forecast.forecastday[2].date.replace(" ", "T")).getDay()]}</h4>
            </div>
            <div class="py-4 px-2 flex flex-col justify-center items-center">
                <img src="${data.forecast.forecastday[2].day.condition.icon}" class="w-20" />
                <h2 class="text-5xl font-bold py-2">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
                <div class="flex flex-col gap-2 py-3">
                    <span>${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</span>
                    <span class="text-hover-color">${data.forecast.forecastday[2].day.condition.text}</span>
                </div>
            </div>
        </div>

    
    `
    $('#forcast').html(content);
}

searchWeather('cairo')