const axios = require('axios')

export default function getStock (symbol) {
  return axios.get(`/api/stock/${symbol}`)
    .then(res => res.data)
    .catch(err => console.error(err))
}

