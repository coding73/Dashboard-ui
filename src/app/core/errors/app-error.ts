export class AppError {

  error: Error = new Error;

  constructor(error: Error) {

    if (error) {
      this.error = error;
    }

    console.error(error.message);
  }
}
