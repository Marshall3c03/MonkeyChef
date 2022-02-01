 const baseURL = "http://localhost:5000/api/recipes/"

const MealRecipeService = {
    getById(recipeId) {
        return fetch(baseURL + recipeId)
        .then(result => result.json())
    },

    getAll() {
        return fetch(baseURL)
        .then(result => result.json())
    },

    create (recipe){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    delete (id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        }) 
    },

    update (recipe) {
        return fetch(baseURL + recipe.id, {
            method: 'PUT',
            body: JSON.stringify(recipe),
            headers: { 'Content-Type': 'application/json' }
        }) 
    }
}
export default MealRecipeService;