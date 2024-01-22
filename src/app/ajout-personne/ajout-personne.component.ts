import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AnnuaireService } from '../annuaire.service';

@Component({
  selector: 'app-ajout-personne',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajout-personne.component.html',
  styleUrl: './ajout-personne.component.css'
})
export class AjoutPersonneComponent {
  
 as 

constructor(private annuaireService : AnnuaireService){
  this.as=annuaireService;
}

  onAjoutPersonneSubmit(formData:NgForm){
   this.as.ajouterPersonne(formData.value);
  }

}
