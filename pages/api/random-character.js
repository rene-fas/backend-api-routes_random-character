import Chance from "chance";

export default function handler(req, res) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
    // Add more keys as desired
  };

  res.status(200).json(character);
}
