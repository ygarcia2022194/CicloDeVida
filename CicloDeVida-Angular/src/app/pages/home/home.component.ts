import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayDataComponent } from '../display-data/display-data.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, DisplayDataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
