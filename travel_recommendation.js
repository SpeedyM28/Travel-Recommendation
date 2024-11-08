let autosearch = {
    "beach":"beaches",
    "beachs":"beaches",
    "beaches":"beaches",
    "beich":"beaches",
    "beech":"beaches",
    "beichs":"beaches",
    "beechs":"beaches",
    "beeches":"beaches",
    "beiches":"beaches",
    "temple":"temples",
    "temples":"temples",
    "tempels":"temples",
    "tempel":"temples",
    "tempeel":"temples",
    "tempeels":"temples",
    "templess":"temples",
    "templies":"temples",
    "country":"countries",
    "countrys":"countries",
    "countres":"countries",
    "countries":"countries",
    "countrees":"countries",
    "countree":"countries",
    "countre":"countries",
    "countryes":"countries",
    "countrye":"countries"
};

function searchCondition(){
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log("data successfully received");
            
            const fixed_input = autosearch[input];

            if(typeof fixed_input === 'undefined'){
                resultDiv.innerHTML = 'Sorry, what you are searching for was not found';
                return;
            }
            
            if(fixed_input != "countries"){
                const tourist_attraction = data[fixed_input];
                resultDiv.innerHTML += `<h2>Cities:</h2><br>`;
                tourist_attraction.forEach(x => {
                    resultDiv.innerHTML += `<h3>${x.name}</h3>`;
                    resultDiv.innerHTML += `<img src="${x.imageUrl}" alt="${fixed_input} photo">`;
                    resultDiv.innerHTML += `<p>${x.description}</p>`;
                    resultDiv.innerHTML += `<br><br>`;
                });
            } //had to separate as countries formatting was different to temples and beaches
            else{
                const tourist_attraction = data[fixed_input];
                resultDiv.innerHTML += `<h2>Countries:</h2><br>`;
                tourist_attraction.forEach(country => {
                    resultDiv.innerHTML += `<h3>${country.name}</h3><br>`;
                    resultDiv.innerHTML += `<h4>Cities:</h4><br>`;
                    country.cities.forEach(city => {
                        resultDiv.innerHTML += `<h4>${city.name}</h4>`;
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="city photo">`;
                        resultDiv.innerHTML += `<p>${city.description}</p>`;
                        resultDiv.innerHTML += `<br><br>`;
                    });
                });
            }
        })
        .catch(error => {
            console.error('Oops there was an error:', error);
            resultDiv.innerHTML = `<h2>An error occurred while fetching data.</h2>`;
        });
    }

document.getElementById('btnSearch').addEventListener('click', searchCondition);

function reset(){
    document.getElementById('conditionInput').value = "";
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

document.getElementById('reset').addEventListener('click',reset);