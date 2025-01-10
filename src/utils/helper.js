export const fetchCoordinates = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${apiKey}`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].geometry.location;
    }
    return null;
  } catch (error) {
    return null;
  }
};
