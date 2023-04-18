import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
import { get } from 'mongoose'

const router = Router()

// GET localhost:3000/flights
router.get("/", flightsCtrl.index)
// GET localhost:3000/flights/new
router.get("/new", flightsCtrl.new)
// GET localhost:3000/flights/:flightId
router.get("/:flightId", flightsCtrl.show)
// GET localhost:3000/flights/:flightId/edit
router.get("/:flightId/edit", flightsCtrl.edit)
// GET localhost:3000/flights
router.post("/", flightsCtrl.create)

router.post('/:flightId/tickets', flightsCtrl.createTicket)
// GET localhost:3000/flights/:flightId
router.delete("/:flightId", flightsCtrl.delete)
// GET localhost:3000/flights/:flightId
router.put("/:flightId", flightsCtrl.update)


export { router }
