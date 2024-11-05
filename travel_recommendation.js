function searchCondition(){
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log("data successfully received");

            if(input !== "beach" || input !== "beaches" || input !== "beachs" || input !== "temples" || input !== "temple" || input !== "templs" || input !== "country" || input !== "countries" || input !== "countrys"){
                resultDiv.innerHTML = 'Sorry, what you are searching for was not found';
                return;
            }

            //const mappedinput = dictionary[input];

            //if failed return again, else continue and filter through json

            //create a dictionary to map multiple words to a set standard 
            //search for the set standard within json data, compare with 
            //health example

            // const condition = data.conditions.find(item => item.name.toLowerCase() === input);

            // if (condition) {
            //   const symptoms = condition.symptoms.join(', ');
            //   const prevention = condition.prevention.join(', ');
            //   const treatment = condition.treatment;

            //   resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
            //   resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

            //   resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
            //   resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
            //   resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            // } else {
            //   resultDiv.innerHTML = 'Condition not found.';
            // }
        })
        .catch(error => {
            console.error('Oops there was an error:', error);
            // resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
    }

document.getElementById('btnSearch').addEventListener('click', searchCondition);