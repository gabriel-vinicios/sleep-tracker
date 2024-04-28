import express from 'express'

export const routes = express.Router()

routes.post("/auth")
routes.get("/timings")
routes.post("/users")