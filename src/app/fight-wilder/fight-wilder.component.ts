import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-fight-wilder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fight-wilder.component.html',
  styleUrl: './fight-wilder.component.scss'
})
export class FightWilderComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  nameWilder: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.nameWilder = params.get('name'))

}
}
