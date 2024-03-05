import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-search-wilder',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, RouterOutlet],
  templateUrl: './search-wilder.component.html',
  styleUrl: './search-wilder.component.scss'
})
export class SearchWilderComponent {
  nameWilder: string | undefined;
  router: Router = inject(Router);

  onSubmit() {
    if (this.nameWilder) {
      this.router.navigate(['/wcs', this.nameWilder]);
    }
  }

}
