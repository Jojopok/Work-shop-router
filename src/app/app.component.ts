import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchWilderComponent } from './search-wilder/search-wilder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchWilderComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'router';
}
