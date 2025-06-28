import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',//Extend built in button element
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
