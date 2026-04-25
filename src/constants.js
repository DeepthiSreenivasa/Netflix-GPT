export const options = {
  headers: {
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_TOKEN,
    accept: "application/json",
  },
  openApiKey: process.env.REACT_APP_OPENAI_KEY,
};
