declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

// sobrescrevendo os tipos do express
