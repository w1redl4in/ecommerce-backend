declare namespace Express {
  interface Request {
    user: {
      email: string;
      password: string;
      iat: number;
      exp: number;
    };
  }
}
