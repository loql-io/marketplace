import rp from 'request-promise-native';

export default async (req, res) => {
  try {
    const options = {
      uri: `https://api.getAddress.io/distance/${req.query.postcode_from}/${req.query.postcode}`,
      qs: {
        expand: true,
        sort: true,
        'api-key': 'jipySQaa2kuIsQ8H2wCvig26529'
      },
      json: true
    };

    const response = await rp(options);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
