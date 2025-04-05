const axios = require('axios');

async function fetchReleaseSchedule() {
  const url = 'https://chromiumdash.appspot.com/fetch_milestones?num=5'; // placeholder
  const response = await axios.get(url);
  return response.data;
}

module.exports = { fetchReleaseSchedule };
