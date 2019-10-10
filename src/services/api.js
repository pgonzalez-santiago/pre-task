import { create } from 'apisauce'

const apiUrl = 'https://pro-api.coinmarketcap.com/v1/'

const api = create({
  baseURL: apiUrl,
  headers: {
    /*
      NOTE: Due to this is a example test and we do not have backend.

      https://coinmarketcap.com/api/faq/

      Q:Why did I receive a Access-Control-Allow-Origin error while trying to use the API?
      A:This CORS error means you are trying to make HTTP requests directly to the API from JavaScript
      in the client-side of your application which is not supported.
      This restriction is to protect your API Key as anyone viewing your application
      could open their browser's Developer Tools to view your HTTP requests and steal your API Key.
      You should prevent your API Key from being visible on your client-side by proxying
      your requests through your own backend script.

    */
    Accept:              'application/json',
    'X-CMC_PRO_API_KEY': '21d2103b-493f-423b-a3f5-d18e2e70c79b',
  },
})

export default api
