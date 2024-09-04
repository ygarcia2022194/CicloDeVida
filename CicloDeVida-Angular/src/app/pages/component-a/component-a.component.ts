import { Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss'
})
export class ComponentAComponent {
  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['/component-b']);
  }

  ngOnDestroy() {
    console.log('El componente A se ah destruido');
  }
}
