declare namespace Express {
  interface Request {
    user: {
      id: string;
      name: string;
      email: string;
      iat: number;
      exp: number;
    };
  }
}
