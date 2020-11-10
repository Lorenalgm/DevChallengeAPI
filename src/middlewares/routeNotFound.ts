import { Request, Response, NextFunction } from 'express'

export default function routeNotFound(request: Request, _: Response, next: NextFunction) {
  return next({
    status: 404,
    message: 'Not found.',
    error: 'Resource not found.',
    details: {
      path: `The endpoint ${request.method}: ${request.path} could not be found.`
    }
  })
}
