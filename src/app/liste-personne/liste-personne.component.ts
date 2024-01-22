import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnnuaireService } from '../annuaire.service';

@Component({
  selector: 'app-liste-personne',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-personne.component.html',
  styleUrl: './liste-personne.component.css'
})
export class ListePersonneComponent {

  personnes : any[];
  
  constructor(private annuaireService : AnnuaireService){
    this.personnes = annuaireService.lister();
  }
}
