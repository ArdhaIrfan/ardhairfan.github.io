const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa464f6a67msh3ddccfcbb2425b2p1602c1jsnb957a069344d',
		'X-RapidAPI-Host': 'worldwide-recipes1.p.rapidapi.com'
	}
};

const getRecipes = async (keyword) => {
    try {
        const response = await fetch(`https://worldwide-recipes1.p.rapidapi.com/api/search?q=${keyword}`, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return;
    }
}

const displayFoodName = (foodData) => {
    const foodNameDiv = document.getElementById("food-text");
    const foodName = foodData.results.criteria.q;
    console.log(foodName)
    const element = `<h2>Showing the results of ${foodName} recipes<h2>`;
    foodNameDiv.innerHTML = element;
}

const displayRecipes = (foodData) => {
    const recipesDiv = document.getElementById("recipes-results");
    recipes = foodData.results.feed;

    let listOfElement = "";

    for (let i = 0; i < recipes.length; i++) {
        const recipesData = {
            title: recipes[i].display.displayName,
            url: recipes[i].display.source.sourceRecipeUrl,
            image: recipes[i].display.images[0],
            rating: recipes[i].content.details.rating,
            authorName: recipes[i].display.source.sourceDisplayName,
            authorUrl: recipes[i].display.source.sourceSiteUrl
        }

        const element = `
        <div class="recipe-list">
            <div><img class="img-list" src="${recipesData.image}"></div>
            <div>
                <h3><a href="${recipesData.url}" target="_blank">${recipesData.title}</a></h3>
                <div>
                    <div>
                        <p class="author-name">${recipesData.authorName}</p>
                        <p class="author-site">${recipesData.authorUrl}</p>
                    </div>
                    <p class="rating">Rating: ${recipesData.rating}</p>
                </div>
            </div>
        </div>
      `;
        listOfElement += element;
    }

    recipesDiv.innerHTML = listOfElement;
}

const searchRecipes = async () => {
    const foodName = document.getElementById("food-name").value;
    if (!foodName) {
        return null;
    }
    const foodData = await getRecipes(foodName);
    if (!foodData.error) {
    displayFoodName(foodData);
    displayRecipes(foodData);
    }
}