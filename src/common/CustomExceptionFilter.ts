import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus();
    const message = exception.message;

    const customResponse = {
      statusCode: status,
      message,
      error: exception.stack ? exception.stack : 'Internal server error',
    };

    const { url, method } = request;

    // Log error for debugging-
    console.error(`Exception occurred: ${method} ${url} - ${message}`);

    response.status(status).json(customResponse);
  }
}
