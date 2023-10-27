import { Polybase } from '@polybase/client/dist';
import Cors from 'cors';
import { ResponseError } from '@src/models/ResponseError';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@src/models/user';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | ResponseError>
) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  const db = new Polybase({
    defaultNamespace: 'regenwise-regen-db',
  });
  res.setHeader('Cache-Control', 'no-store');
  const userCollectionData = (await db.collection('user').get()).data;
  let users: User[] = userCollectionData.map((user) => {
    return { ...user.data, userProjects: [] };
  });

  users
    ? res.status(200).json(users as any)
    : res.status(404).json({ message: `Projects not found.` });
}
