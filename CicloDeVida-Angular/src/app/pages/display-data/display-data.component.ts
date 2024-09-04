import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent implements OnInit{
  @Input() initialValue: string = '';
  updatedValue: string = '';

  ngOnInit() {
    this.updatedValue = this.initialValue;
    
    setTimeout(() => {
      this.updatedValue = 'Nuevo valor después de 30 segundos';
    }, 30000); 
  }

}
