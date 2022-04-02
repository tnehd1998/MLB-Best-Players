import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_APP_BASE_URL;

  const response = await axios(`${baseUrl}/ranking`);

  res.status(200).json(response.data);
}

export default handler;
