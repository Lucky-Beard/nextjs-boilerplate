// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  surname: z.string().optional(),
  email: z.string().email(),
  company: z.string().optional(),
  province: z.string(),
  otherProvince: z.string().optional(),
  topic: z.string(),
  otherTopic: z.string().optional(),
  message: z.string().optional()
});

type Data = {
  error?: any;
  message?: string;
};

const setSendGridKey = () => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    return true;
  } catch (error) {
    return false;
  }
};

const sendMessage = async (data: any) => {
  console.log('data', data);
  const msg = {
    to: process.env.TO_CONTACT_EMAIL,
    from: process.env.FROM_CONTACT_EMAIL,
    subject: 'Peregrine.co.za - Web query',
    template_id: process.env.SENDGRID_TEMPLATE_ID,
    dynamic_template_data: data
  };

  return await sgMail.send(msg);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = schema.safeParse(req.body);

  if (response.success === false) {
    const { errors } = response.error;

    return res.status(400).json({
      error: { message: 'Invalid request', errors }
    });
  }

  if (setSendGridKey() === false) {
    res.status(400).json({
      error: { message: 'Something went wrong, contact administrator' }
    });
    return;
  }

  try {
    const result = await sendMessage({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      company: req.body.company,
      province: req.body.province,
      otherProvince: req.body.otherProvince,
      topic: req.body.topic,
      otherTopic: req.body.otherTopic,
      message: req.body.message
    });

    console.log('RESULT::', result);

    res.status(200).json({ message: 'Successfully sent message' });
  } catch (error) {
    console.log('error', error);
    res.status(400).json({ error: { message: 'Failed to send message' } });
  }
}
