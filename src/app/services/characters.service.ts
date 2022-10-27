import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { CHARACTERS } from '../data/data-characters';


@Injectable()
export class CharactersService {

  constructor() { }

  getCharacters(): Promise<Character[]>{
    return Promise.resolve(CHARACTERS);
  }

}
