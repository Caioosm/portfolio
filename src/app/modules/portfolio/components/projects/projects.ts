import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Projeto vida FullStack',
      width: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheca o projeto',
          href: 'https://google.com.br'
        }
      ]
    },
  ]);
}
