import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[];

  constructor( private charactersSrv: CharactersService) { }

  getCharacters(): void {
    this.charactersSrv.getCharacters().then(characters => this.characters = characters);
  }

  ngOnInit() {
    this.getCharacters();
  }

}
