const input = document.getElementById('food-name');

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
    let element = '';
    if (foodData.results.feed.length > 0) {
        element += `<h4>Displaying ${foodData.results.feed.length} results of ${foodName} recipes<h4>`;
    } else {
        element += `<h4>There's currently no result of ${foodName} recipes<h4>`;
    }
    foodNameDiv.innerHTML = element;
}

const displayRecipes = (foodData) => {
    const recipesDiv = document.getElementById("recipes-results");
    recipes = foodData.results.feed;

    let listOfElement = "";

    for (let i = 0; i < recipes.length; i++) {
        let recipesData = {
            title: String(recipes[i].display.displayName),
            url: recipes[i].display.source.sourceRecipeUrl,
            image: recipes[i].display.images[0],
            rating: recipes[i].content.details.rating,
            authorName: String(recipes[i].display.source.sourceDisplayName),
            authorUrl: String(recipes[i].display.source.sourceSiteUrl)
        }

        if (recipesData.authorUrl.includes('http://')) {
            console.log(recipesData.authorUrl.includes('http://'));
            recipesData.authorUrl.slice(7);
            console.log(recipesData.authorUrl);
        } else if (recipesData.authorUrl.includes('https://')) {
            console.log(recipesData.authorUrl.includes('https://'));
            recipesData.authorUrl.slice(8);
            console.log(recipesData.authorUrl);
        }

        const element = `
        <a href="${recipesData.url}" target="_blank">
            <div class="recipe-list">
                <div class="img-list">
                    <img src="${recipesData.image}">
                </div>
                <div class="desc">
                    <h3>${recipesData.title}</h3>
                    <div>
                        <p class="author-name">${recipesData.authorName}</p>
                        <p class="author-site">${recipesData.authorUrl}</p>
                        <p class="rating">Rating: ${recipesData.rating}</p>
                    </div>
                </div>
            </div>
        </a>
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

input.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
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
});