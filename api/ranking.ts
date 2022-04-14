import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_APP_BASE_URL;

  try {
    const response = await axios(`${baseUrl}/ranking`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default handler;
