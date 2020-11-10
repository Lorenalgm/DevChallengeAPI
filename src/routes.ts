import { Router } from 'express'

import DevController from './controllers/DevController'
import ChallengeController from './controllers/ChallengeController'
import NewsletterController from './controllers/NewsletterController'

class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router()

    this.init()
  }

  init(): void {
    this.challengeRoutes()
    this.developerRoutes()
    this.newsletterRoutes()
  }

  challengeRoutes(): void {
    this.routes.get('/challenges', ChallengeController.index)
    this.routes.get('/challenges/:challenge_id', ChallengeController.show)
    this.routes.post('/challenges', ChallengeController.store)
  }

  developerRoutes(): void {
    this.routes.get('/devs', DevController.index)
    this.routes.post('/devs', DevController.store)
  }

  newsletterRoutes(): void {
    this.routes.get('/newsletter', NewsletterController.index)
    this.routes.post('/newsletter', NewsletterController.store)
  }
}

export default new Routes().routes
