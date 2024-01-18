import { of } from 'rxjs';

export class NetError extends Error {
  override message!: string;
  code?: number;
  type?: string;

  static UN_AUTHORISE_ERROR = 401;
  static INTERNAL_SERVER_ERROR = 500;
  static BAD_GATWAY_ERROR = 503 || 502;

  static serverErrors = {
    INVALID_CREDENTIAL: 'Invalid login credentials',
    EMAIL_NOT_VERIFIED: 'Please verify your email and try again',
    USER_NOT_FOUND: 'This user does not exist. Please check your email address',
    EMAIL_NOT_FOUND:
      'This user does not exist. Please check your email address',
  };

  constructor(message: string, code?: number, type?: string) {
    super(message);
    for (const [key, value] of Object.entries(NetError.serverErrors)) {
      this.message = type && key == type ? value : message;
    }

    this.code = code;
    this.type = type;
  }

  static fromMsg(message: string): Error {
    return new NetError(message);
  }
}
