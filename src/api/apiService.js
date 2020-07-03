import axios from 'axios';

const API_URL = 'https://api.github.com/orgs/';

async function getOrg(org) {
  try {
    const res = await axios.get(API_URL + org);
    const data = await res.data;
    return data;
  } catch (error) {
    return 404;
  }
}

async function getRepository(org, pages) {
  const res = await axios.get(`${API_URL}${org}/repos?page=${pages}`);
  const data = await res.data;
  return data;
}

export { getRepository, getOrg };
