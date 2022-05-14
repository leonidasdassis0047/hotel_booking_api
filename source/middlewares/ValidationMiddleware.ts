import { NextFunction, Request, RequestHandler, Response } from 'express';
import Joi from 'joi';

export default function ValidationMiddleware(
  schema: Joi.Schema
): RequestHandler {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const results = await schema.validateAsync(request.body, {
        abortEarly: false,
        allowUnknown: true
      });
      request.body = results;
      next();
    } catch (error: any) {
      const validationErrors: string[] = [];
      error.details.forEach((err: Joi.ValidationErrorItem) => {
        validationErrors.push(err.message);
      });
    }
  };
}
