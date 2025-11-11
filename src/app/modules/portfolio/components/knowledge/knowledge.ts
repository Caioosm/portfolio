import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Icone de conhecimento de AWS'
    },
    {
      src: 'assets/icons/knowledge/dck.svg',
      alt: 'Icone de conhecimento de Docker'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimento em Java'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento em Javascript'
    },
    {
      src: 'assets/icons/knowledge/linux.svg',
      alt: 'Icone de conhecimento em linux'
    },
  ])
}
