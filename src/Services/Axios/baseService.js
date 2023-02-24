const axios = require('axios');

const { CLIENTS_URL, USERS_URL } = process.env;

const APIClients = axios.create({
  baseURL: `http://${CLIENTS_URL}/`,
});

const APIUsers = axios.create({
  baseURL: `http://${USERS_URL}/`,
});

module.exports = {
  APIClients,
  APIUsers,
};
