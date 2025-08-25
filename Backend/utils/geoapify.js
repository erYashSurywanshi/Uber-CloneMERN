import axios from "axios";

export const getCoordinates = async (address) => {
  try {
    const apiKey = process.env.GEOAPIFY_API_KEY;
    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/search`,
      {
        params: {
          text: address,
          apiKey,
        },
      }
    );

    if (
      response.data &&
      response.data.features &&
      response.data.features.length > 0
    ) {
      const { lat, lon } = response.data.features[0].properties;
      return { lat, lon };
    } else {
      return null;
    }
  } catch (err) {
    console.error("Geoapify Error:", err.message);
    return null;
  }
};
