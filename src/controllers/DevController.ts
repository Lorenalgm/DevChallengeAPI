import { Request, Response } from 'express'

import Dev from '../models/Dev'

class DevController {
  async index(_req: Request, res: Response): Promise<Response> {
    const devs = await Dev.find()

    return res.json(devs)
  }

  async store(req: Request, res: Response): Promise<Response> {
    const {
      name, position, bio, linkedin, github, avatar
    } = req.body

    const devAlreadyExists = await Dev.findOne({ github })

    if (devAlreadyExists) {
      return res.status(200).json(devAlreadyExists)
    }

    const dev = await Dev.create({
      name, position, bio, linkedin, github, avatar
    })

    return res.status(201).json(dev)
  }
}

export default new DevController()
