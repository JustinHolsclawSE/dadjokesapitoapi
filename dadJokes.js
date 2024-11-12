import {keys} from './dadjokeskeys.js';
import axios from 'axios';
import express from 'express';
const app = express()

app.get('/jokeoftheday', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
          'x-rapidapi-key': keys.xrapidapikey,
          'x-rapidapi-host': keys.xrapidapihost
        }
      };
      
      try {
          const response = await axios.request(options);
          res.send(response.data.body[0].setup + ' ' + response.data.body[0].punchline)
          console.log(response.data);
      } catch (error) {
          console.error(error);
          res.send(error)
      }
})

app.get('/*', (req, res) => {
    res.send('This is not a valid call, please use /jokeoftheday');
})

app.listen(3000, () => console.log('Application is listening on port 3000'))