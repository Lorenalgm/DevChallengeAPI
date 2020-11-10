import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import './config/dotenv'

import errorHandler from './middlewares/errorHandler'
import routeNotFound from './middlewares/routeNotFound'

import routes from './routes'

class App {
  public express: express.Application;

  constructor() {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  database(): void {
    mongoose.connect(process.env.MONGO_URL || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  middlewares(): void {
    this.express.use(cors())
    this.express.use(express.json())
  }

  routes(): void {
    this.express.use(routes)

    this.express.use(routeNotFound)
    this.express.use(errorHandler)
  }
}

export default new App().express
