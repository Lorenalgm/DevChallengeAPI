import { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line no-unused-vars
export default function errorHandler(
  error: any,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  const { status, ...err } = error

  return response.status(status || 500).send(err)
}
