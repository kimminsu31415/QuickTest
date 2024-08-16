// src/apis/characterMale.js
import axios from "axios";

export const fetchMaleCharacters = async () => {
  try {
    const response = await axios.post(
      "https://6237-220-124-223-3.ngrok-free.app/api/webtoon/male/",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          Accept: "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const fetchFemaleCharacters = async () => {
  try {
    const response = await axios.post(
      "https://6237-220-124-223-3.ngrok-free.app/api/webtoon/female/",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          Accept: "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
