// const baseURL = "http://localhost:5000/api/recipes"
// const baseURL = "http://localhost:5000/api/planner"

const MealPlannerService = {
//     getRecipes () {
//     return fetch(baseURL)
//         .then(res => res.json());
// },

    createRecipe (recipe, url){
        // console.log(JSON.stringify(recipe))
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    deleteRecipe (id, url) {
    return fetch(url + id, {
        method: 'DELETE'
    }) 
},

    updateRecipe (id, url) {
    return fetch(url + id, {
        method: 'PUT'
    }) 
}
}
export default MealPlannerService;