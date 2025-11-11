import { Component } from '@angular/core';

//header component
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
