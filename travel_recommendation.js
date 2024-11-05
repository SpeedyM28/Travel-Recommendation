fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        console.log("data successfully received");
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