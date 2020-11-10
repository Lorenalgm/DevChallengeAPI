import { Request, Response } from 'express'

import Newsletter from '../models/Newsletter'

class NewsletterController {
  async index(_req: Request, res: Response): Promise<Response> {
    const newsletter = await Newsletter.find()

    return res.json(newsletter)
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { email } = req.body

    const newsletter = await Newsletter.create({ email })

    return res.json(newsletter)
  }
}

export default new NewsletterController()
