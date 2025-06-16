
import { Environment, Paddle} from "@paddle/paddle-node-sdk";
const api_key = process.env.PADDLE_API_KEY || "pdl_sdbx_apikey_01jxvj9mwcdrb1gp6f7jjctnft_hYET88dZ4Qb71eXngkxnvj_AR0"
const paddleConfig = new Paddle(api_key, {
  environment: Environment.sandbox
});


class PaddleService {
  public async getPackages() {
    const items =  paddleConfig.products.list();
    const prods = await items.next()
    return prods;
  }
}

export default new PaddleService();
