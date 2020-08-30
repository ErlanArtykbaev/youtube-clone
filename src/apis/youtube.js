import axios from 'axios'

const KEY = 'AIzaSyBP5CI4iNzJI7S0qn6aE_8Cwr3B-7qOmbU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 20,
    key: KEY
  }
})