import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Internal from "./errors/Internal";
import BadRequest from "./errors/BadRequest";
import timeRouter from "./routes/timeRoutes";
import jogadorRouter from "./routes/jogadorRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

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
        methods: ["GET", "POST", "PUT", "DELETE"],
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
        } else {
          const error = new Internal("Erro interno")
          return res.status(error.statusCode).json(
            { 
              error: error.message, 
              status: error.statusCode
            }
          )
        }
      }
    );
  }

  private async routes() {
    this.server.use("/api/time", timeRouter);
    this.server.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    this.server.use("/api/jogador", jogadorRouter);
  }
}
