import { Component } from '@angular/core';

//header component
import { Header } from '../../components/header/header';
//knowledge component
import { Knowledge } from '../../components/knowledge/knowledge';

@Component({
  selector: 'app-home',
  imports: [Header, Knowledge],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
