// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import axios from 'axios';

const schema = z.object({
  Name: z.string(),
  EmailAddress: z.string().email(),
  ConsentToTrack: z.string(),
  surname: z.string().optional(),
  topic: z.string().optional(),
  province: z.string().optional(),
  other: z.string().optional()
});

type Data = {
  error?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = schema.safeParse(req.body);

  // if (response.success === false) {
  //   const { errors } = response.error;

  //   return res.status(400).json({
  //     error: { message: 'Invalid request', errors }
  //   });
  // }

  try {
    req.body.ConsentToTrack
      ? (req.body.ConsentToTrack = 'Yes')
      : (req.body.ConsentToTrack = 'No');

    const result = await axios.post(
      'https://api.createsend.com/api/v3.3/subscribers/2b392f6809e2c3c6078b6d65dce8be11.json',
      req.body,
      {
        headers: {
          Authorization:
            'Basic S0l3bSsvSklvQ3lWUml0M3hUL2JyTENmWHNpZ1c3U2tLTW41S3lmZXp3dTBTK2VMMk91WFg0eDhxM2U4S3BSZHZEMnhTeHB6bVpjdmI1SWxHRDdKZzM2Skdlci9WRG50MDNHdHBaNUdtM0xTTExwU08wWGlQUW1YRjRFbk5kSGUycWtBMmhwazBYemVBME9tTnhnVmRnPT06eDo=',
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({ message: 'Success' });
  } catch (error: any) {
    console.log('Error!:: ', error);
    if (error.response.data) {
      res.status(401).json({
        error: {
          message:
            'Email Address exists in unconfirmed list. Subscriber is not added.'
        }
      });
    } else {
      res.status(400).json({ error: { message: 'Failed to subscribe' } });
    }
  }
}
