import { Component } from '@angular/core';

//header component
import { Header } from '../../components/header/header';
//knowledge component
import { Knowledge } from '../../components/knowledge/knowledge';
//experience component
import { Experience } from '../../components/experience/experience';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Knowledge,
    Experience
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
