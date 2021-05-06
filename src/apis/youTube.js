import axios from 'axios';

const KEY = 'AIzaSyA79DSJjGxRT4FfhnmtNZmy93dnXVFFVr0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
