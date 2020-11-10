import { Request, Response } from 'express'

import { challengesService } from '../services'

class ChallengeController {
  async index(req: Request, res: Response): Promise<Response> {
    const { type } = req.query

    const challenges = await challengesService.fetchAll(type)

    return res.json(challenges)
  }

  async store(req: Request, res: Response): Promise<Response> {
    const {
      type,
      name,
      description,
      level,
      techs,
      background,
      images,
      github_url: githubUrl,
      brief,
      dev_id: devId
    } = req.body

    const challenge = await challengesService.create({
      type,
      name,
      description,
      level,
      techs,
      background,
      images,
      github_url: githubUrl,
      brief,
      dev_id: devId
    })

    return res.json(challenge)
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { challenge_id: id } = req.params

    const challenge = await challengesService.fetchById(id)

    return res.json(challenge)
  }
}

export default new ChallengeController()
