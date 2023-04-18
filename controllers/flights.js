import { Flight } from "../models/flight.js"

function index(req, res) {
    Flight.find({})
    .then(flights => {
        res.render('flights/index', {
            flights: flights,
            title: 'All Flights'
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights/new')
    })
}

function show(req, res) {
    Flight.findById(req.params.flightId)
    .then(flight => {
        res.render("flights/show", {
            flight: flight,
            title: 'Flight Details'
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights')
    })
}


function newFlight(req, res) {
    res.render("flights/new", {
        title: "Add Flight",
    })
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    Flight.create(req.body)
    .then(flight => {
        console.log(req.body)
        res.redirect('/flights')
    })
    .catch(error => {
        console.log(error)
        res.redirect('flights/index')
    })
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.flightId)
    .then(flight => {
        res.redirect("/flights")
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights')
    })
}

function edit(req, res) {
    Flight.findById(req.params.flightId)
    .then(flight => {
        res.render('flights/edit', {
            flight: flight,
            title: "Edit Flight"
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights')
    })
}

function update(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    Flight.findByIdAndUpdate(req.params.flightId, req.body, {new : true})
    .then(flight => {
        res.redirect(`/flights`)
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights')
    })
}

function createTicket(req, res) {
    Flight.findById(req.params.flightId)
    .then(flight => {
      flight.tickets.push(req.body)
      flight.save()
      .then(() => {
        res.redirect(`/flights/${flight._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }

export {
    index,
    newFlight as new,
    create,
    deleteFlight as delete,
    show,
    edit,
    update,
    createTicket,
}