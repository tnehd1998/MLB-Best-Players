import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_APP_BASE_URL;
  const { award } = req.query;

  try {
    const response = await axios(`${baseUrl}/winner/${award}`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default handler;
