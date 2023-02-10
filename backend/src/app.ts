import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Internal from "./errors/Internal";
import BadRequest from "./errors/BadRequest";
import timeRouter from "./routes/time";
import jogadorRouter from "./routes/jogador";

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private async middlewares() {
    this.server.use(
      cors({
        origin: "*",
        credentials: true,
        methods: ["GET", "POST"],
      })
    );

    this.server.use(cookieParser());

    this.server.use(express.json());

    this.server.use(express.urlencoded({ extended: true }));

    this.server.use(
      (
        error: BadRequest | Internal,
        req: Request,
        res: Response,
        next: NextFunction
      ) => {
        if (error && error.statusCode) {
          return res.status(error.statusCode).json({
            message: error.message,
            status: error.statusCode,
          });
        }
      }
    );
  }

  private async routes() {
    this.server.use("/api/time", timeRouter);
    this.server.use("/api/jogador", jogadorRouter);
  }
}
