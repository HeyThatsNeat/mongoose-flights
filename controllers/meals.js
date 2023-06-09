import { Meal } from "../models/meal.js"

function newMeal(req, res) {
    Meal.find({})
    .then( meals => {
        res.render("meals/new", {
            title: 'Add meal',
            meals: meals,
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect("/flights")
    })
}

function create(req, res) {
    Meal.create(req.body)
    .then(meal => {
        res.redirect("/meals/new")
    })
    .catch(error => {
        console.log(error)
        res.redirect("/meals/new")
    })
}

export {
    newMeal as new,
    create,
}