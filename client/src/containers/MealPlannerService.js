const baseURL = "http://localhost:5000/api/recipes/"

const MealPlannerService = {
    getRecipes () {
    return fetch(baseURL)
        .then(res => res.json());
},

    addRecipe (recipe){
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    deleteRecipe (id) {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }) 
},

    updateRecipe (id) {
    return fetch(baseURL + id, {
        method: 'PUT'
    }) 
}
}
export default MealPlannerService;