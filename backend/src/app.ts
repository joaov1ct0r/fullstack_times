import express from "express";

export default class App {
  public server: Express.Application;

  constructor() {
    this.server = express();
  }
}
