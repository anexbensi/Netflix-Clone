import {API_KEY} from '../src/Constants/Constants'


export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const action = `/discover/tv?api_key=${API_KEY}&with_networks=28`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`