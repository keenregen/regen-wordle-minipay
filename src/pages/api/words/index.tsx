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
  res.setHeader('Cache-Control', 'no-store');

  const easyWords = [
    'Earth',
    'Field',
    'Fresh',
    'Fruit',
    'Grass',
    'Green',
    'Light',
    'Ocean',
    'Plant',
    'Quest',
    'Grain',
    'Reuse',
    'Daily',
    'Water',
    'Yield',
    'Adapt',
    'Bloom',
    'Cover',
    'Cycle',
    'Fiber',
    'Fungi',
    'Mower',
    'Mulch',
    'Regen',
    'Renew',
    'Shrub',
    'Solar',
    'Spray',
    'Store',
    'Toxin',
    'Waste',
  ];

  const mediumWords = [
    'Balance',
    'Biochar',
    'Breathe',
    'Climate',
    'Compost',
    'Cooking',
    'Drought',
    'Ecology',
    'Economy',
    'Erosion',
    'Farming',
    'Fishery',
    'Grazing',
    'Habitat',
    'Harmony',
    'Harvest',
    'Healthy',
    'Herding',
    'Imagine',
    'Methane',
    'Microbe',
    'Nurture',
    'Organic',
    'Pasture',
    'Rancher',
    'Recycle',
    'Reduced',
    'Removal',
    'Renewal',
    'Respect',
    'Restore',
    'Roaming',
    'Seaweed',
    'Storage',
    'Tilling',
    'Warming',
    'Wetland',
  ];

  const hardWords = [
    'Capturing',
    'Chemicals',
    'Ecosystem',
    'Efficient',
    'Enriching',
    'Fungicide',
    'Gardening',
    'Grassland',
    'Herbicide',
    'Herbivore',
    'Inspiring',
    'Microgrid',
    'Organisms',
    'Peatlands',
    'Pesticide',
    'Perennial',
    'Rebalance',
    'Recycling',
    'Renourish',
    'Replenish',
    'Restoring',
    'Temperate',
  ];

  const allWords = [...easyWords, ...mediumWords, ...hardWords];
  let selectedword = '';
  switch (req.query['difficulty']) {
    case 'easy':
      let randomNumberEasy = Math.floor(Math.random() * (easyWords.length - 1));
      selectedword = easyWords[randomNumberEasy];
      break;
    case 'medium':
      const randomNumbermedium = Math.floor(
        Math.random() * (mediumWords.length - 1)
      );
      selectedword = mediumWords[randomNumbermedium];
      break;
    case 'hard':
      const randomNumberHard = Math.floor(
        Math.random() * (hardWords.length - 1)
      );
      selectedword = hardWords[randomNumberHard];
      break;

    default:
      const randomNumberGeneral = Math.floor(
        Math.random() * (allWords.length - 1)
      );
      selectedword = allWords[randomNumberGeneral];
      break;
  }

  selectedword
    ? res.status(200).json(selectedword.toLowerCase() as any)
    : res.status(404).json({ message: `No word exist.` });
}
