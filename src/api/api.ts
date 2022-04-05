import {Characters} from './characters';
import { Episode } from './episodes';

const CHARACTERS_URL = 'https://rickandmortyapi.com/api/character';
const EPISODE_URL = 'https://rickandmortyapi.com/api/episode'

export async function getCharacters(page:number | null): Promise<Characters | null> {
  let url = page ? `${CHARACTERS_URL}/?page=${page}` : CHARACTERS_URL
  try {
    let responce = await fetch(url);
    let data = await responce.json();
    return data;
  }
  catch {
    return null
  }
}

export async function getEpisode(source:number | string) : Promise<Episode | null> {
  let url : string = typeof(source) === 'number' ? `${EPISODE_URL}/${source}`: source.toString();
  // console.log('%capi.ts line:7 url', 'color: #007acc;', url);
  try {
    let responce = await fetch(url);
    let data = await responce.json();
    return data;
  }
  catch {
    return null
  }
}