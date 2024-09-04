import axios from "axios";

const API_URL = "http://localhost:3000/api/bible";

export async function getRandomVerse() {
  return axios.get(`${API_URL}/random-verse`);
}

export async function getVerseByReference(reference) {
  return axios.get(`${API_URL}/search/${reference}`);
}

export async function setFavoriteVerse(verse) {
  return axios.post(`${API_URL}/favorite/${verse.id}`, verse);
}

export async function getFavorites() {
  return axios.get(`${API_URL}/favorite`);
}
