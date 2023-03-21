
fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
    const globalData = data.Global;
    const totalCases = globalData.TotalConfirmed;
    const totalDeaths = globalData.TotalDeaths;
    const totalRecovered = globalData.TotalRecovered;

    const confirmedNumber = document.getElementById('confirmed');
    const deathNumber = document.getElementById('death');
    const recoveredNumber = document.getElementById('recovered');

    confirmedNumber.innerText = totalCases;
    deathNumber.innerText = totalDeaths;
    recoveredNumber.innerText = totalCases - totalDeaths;

    console.log(confirmedNumber.getElementsByTagName("p"));

    console.log(data);
    // console.log(totalCases);
    // console.log(totalDeaths);
    // console.log(totalRecovered);
    console.log(data.Countries[0]);

    const parent = document.getElementById('list');

    const createList = (country) => {
      const child = document.createElement('li');

      const childInnerHTML = `
          <div class="country-name">
            <h4>${country.Country}</h4>
          </div>
          <div class="country-data">
            <p class="conf">${country.TotalConfirmed}</p>
            <p class="deat">${country.TotalDeaths}</p>
          </div>
      `;

      child.innerHTML = childInnerHTML;
      parent.appendChild(child);
    };

    for (i = 0; i < data.Countries.length; i++) {
      createList(data.Countries[i]);
    }
  })
.catch(error => console.error(error));
