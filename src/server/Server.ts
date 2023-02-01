import express from 'express'
const server = express()

import { router } from './routes'
import 'dotenv/config'

server.use(express.json())

server.use(router)
   


export { server }