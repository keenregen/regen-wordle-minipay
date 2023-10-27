import { Polybase } from '@polybase/client/dist';
import { ResponseError } from '@src/models/ResponseError';
import { User } from '@src/models/user';
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function ProjectHandler(
  req: NextApiRequest,
  res: NextApiResponse<User | ResponseError>
) {
  await runMiddleware(req, res, cors);
  const { query } = req;
  const { id } = query;

  res.setHeader('Cache-Control', 'no-store');
  const db = new Polybase({ defaultNamespace: 'regenwise-regen-db' });
  const collectionReference = db.collection('user');
  const projectsCollectionReference = db.collection('RegenProject');

  try {
    const user = (await collectionReference.record(id as string).get()).data;
    if (!user) {
      return res.status(200).json({ message: `User not found.` });
    }

    let userProjectsObjects: Promise<any>[] = [];
    let userProjects: string[] = [];
    user.projectsObjects = [];

    // Get data from the record
    if (user.projects) {
      user.projects.forEach((project: string) => {
        if (!userProjects.includes(project)) {
          userProjects.push(project);
        }
      });
      user.projects.forEach((project: any) => {
        let userProjectObject = projectsCollectionReference
          .record(project)
          .get();
        userProjectsObjects.push(userProjectObject);
      });
    }

    Promise.allSettled(userProjectsObjects).then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          user.projectsObjects.push(result.value.data);
        } else {
          console.log('Promise rejected:', result.reason);
        }
      });
      res.status(200).json(user);
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
}
