import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UpperCasePipe, DatePipe} from '@angular/common';
import { AproposComponent } from "./apropos/apropos.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, UpperCasePipe, DatePipe, AproposComponent, WelcomeComponent]
})
export class AppComponent {
  title = 'Annuaire';
  oeuvre = {
    titre : 'Star Wars',
    duree : 240,
    dateSortie : new Date(),

  }
}


