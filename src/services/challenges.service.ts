import Challenge from '../models/Challenge'
import { IChallenge } from '../interfaces'

class ChallengeService {
  async fetchAll(type: any): Promise<IChallenge[]> {
    if (type) {
      return Challenge.find({ type })
    }

    return Challenge.find()
  }

  async fetchById(challengeId: string): Promise<IChallenge | null> {
    return Challenge.findById(challengeId).populate('dev_id')
  }

  async create(challengeData: any): Promise<IChallenge> {
    return Challenge.create(challengeData)
  }
}

export default new ChallengeService()
