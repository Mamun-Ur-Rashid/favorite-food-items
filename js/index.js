const loadMeals =(searchText) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))

}
const displayMeals = meals =>{
    const container = document.getElementById('container');
    container.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
  
    const mealsDiv = document.createElement('div');
    mealsDiv.innerHTML = `
    <div class="card card-side bg-base-100 shadow-2xl rounded-lg ">
        <figure><img class="w-full" src="${meal.strMealThumb}" alt="Movie"/></figure>
        <div class="card-body ">
            <h2 class="card-title text-2xl mb-5">${meal.strMeal}</h2>
            <p>There are many variations of passages of avaliable, but the majority have suffered</p>
            <label for="view-details" class="underline" onclick="loadDetails(${meal.idMeal})">View Details</label>
        </div>
    </div>
    `;
        container.appendChild(mealsDiv);
    });
};
const searchMeals = () => {
    const searchText = document.getElementById('search-input').value;
    loadMeals(searchText);
    console.log(searchText)
}
// view details section
const loadDetails = (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => viewDetails(data.meals[0]))
}
const viewDetails = meal =>{
    const viewContainer = document.getElementById("modal-body");
    
    viewContainer.innerHTML = `
    
    <h3 class="mb-3">${meal.strMeal}</h3>
    <img class=" w-[75%] h-40" src="${meal.strMealThumb}" alt="">
    <h3> category: ${meal.strCategory}</h3>
    <h3>Area: ${meal.strArea}</h3>
    <p>Instructions: ${meal.strInstructions.slice(0,100)}</p>
    <h3>Youtube: ${meal.strYoutube}</h3>
    <div class="modal-action">
        <label for="view-details" class="">close</label>
    </div>
    `;
}

loadMeals('fish');
