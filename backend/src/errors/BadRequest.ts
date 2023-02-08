export default class BadRequest extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
