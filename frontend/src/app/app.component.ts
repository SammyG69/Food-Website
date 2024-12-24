import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PartialsComponent } from './components/partials/partials.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PartialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
