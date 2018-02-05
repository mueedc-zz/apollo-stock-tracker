import axios from 'axios'

export default async function getStock (symbol) {
  const res = await axios.get(`/api/stock/${symbol}`)
  const data = await res.data
  return data
}
