import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();
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
  }

  private async routes() {
    this.server.use("/test", (req, res) => {
      return res.json({ hello: "world" });
    });
  }
}
