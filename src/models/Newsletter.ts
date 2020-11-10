import { Schema, model, Document } from 'mongoose'

interface INewsletter extends Document {
  email?: string;
}

const NewsletterSchema = new Schema(
  {
    email: String
  },
  {
    timestamps: true
  }
)

export default model<INewsletter>('Newsletter', NewsletterSchema)
