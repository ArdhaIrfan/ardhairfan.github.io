
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
    recoveredNumber.innerText = totalRecovered;

    console.log(confirmedNumber.getElementsByTagName("p"));

    console.log(data);
    console.log(totalCases);
    console.log(totalDeaths);
    console.log(totalRecovered);
    
  })
.catch(error => console.error(error));
