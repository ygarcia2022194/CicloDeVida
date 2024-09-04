import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
  inputValue: string = '';

  onInputChange(newValue: string) {
    this.inputValue = newValue;
  }
}
