import "dotenv/config";
import App from "./app";

new App().server.listen(
  Number(process.env.SERVER_PORT),
  String(process.env.SERVER_HOST),
  async () => {
    console.log(`Server running!`);
  }
);
