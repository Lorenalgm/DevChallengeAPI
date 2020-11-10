/* eslint-disable camelcase */
import { Schema, model, Document } from 'mongoose'

import { IChallenge as Challenge } from '../interfaces'

interface IChallenge extends Document, Challenge { }

const ChallengeSchema = new Schema(
  {
    type: String,
    name: String,
    description: String,
    level: String,
    techs: [String],
    background: String,
    images: [String],
    github_url: String,
    brief: String,
    dev_id: {
      type: Schema.Types.ObjectId,
      ref: 'Dev'
    }
  },
  {
    timestamps: true
  }
)

export default model<IChallenge>('Challenge', ChallengeSchema)
