const validFood = document.getElementById('valid-name')
validFood.style.display ='none'
const emptyMessage = document.getElementById('empty-message')
emptyMessage.style.display= "none";

const  searchFood =() =>{
    const searchFiled = document.getElementById('input-search');
    const searchText = searchFiled.value;
    searchFiled.value = ''; 
    if(searchText == ''){
      validFood.style.display ='none'
      emptyMessage.style.display= "block";
    } else {
      validFood.style.display ='none'
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
      fetch(url)
      .then( res => res.json())
      .then(data =>  displayFood(data.meals))
    }
   
    
}

const displayFood= meals =>{
const foodCard = document.getElementById('food-card');
console.log(meals)
// foodCard.innerHTML ='';
// text content is the standart way  
foodCard.textContent ='';
if(meals == null){
  emptyMessage.style.display= "none";
  validFood.style.display = 'block'
} else { 
  meals.forEach(meal =>{
    validFood.style.display = 'none'
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div onclick ="loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
              </div>` 
              foodCard.appendChild(div)
  })
}


}

const loadMealDetails = mealId => {

  console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayDetails(data.meals[0]))
}

const displayDetails = meal =>{
console.log(meal)
const mealDetails = document.getElementById('meal-details');
mealDetails.classList.add('mb-5')
mealDetails.textContent = '';
const div = document.createElement('div');
div.classList.add('card')
div.innerHTML = `
             <img src="${meal.strMealThumb}" class="card-img-top" alt="">
             <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 400)}</p>
              <a class="text-wite btn btn-dark" target="_blank" href="${meal.strYoutube}"> Youtube </a>
            </div>
`
mealDetails.appendChild(div)
}