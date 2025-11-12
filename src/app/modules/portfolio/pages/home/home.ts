import { Component } from '@angular/core';

//header component
import { Header } from '../../components/header/header';
//knowledge component
import { Knowledge } from '../../components/knowledge/knowledge';
//experience component
import { Experience } from '../../components/experience/experience';
//experience component
import { Projects } from "../../components/projects/projects";

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Knowledge,
    Experience,
    Projects,
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
