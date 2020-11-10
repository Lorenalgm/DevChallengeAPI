import { Schema, model, Document } from 'mongoose'

import { IDev as Dev } from '../interfaces'

interface IDev extends Dev, Document { }

const DevSchema = new Schema(
  {
    name: String,
    position: String,
    bio: String,
    linkedin: String,
    github: String,
    avatar: String
  },
  {
    timestamps: true
  }
)

export default model<IDev>('Dev', DevSchema)
