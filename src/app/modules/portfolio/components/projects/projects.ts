import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

//material dialog
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
//ENUM
import { EdialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);
  
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

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EdialogPanelClass.PROJECTS
    })
  }
}
