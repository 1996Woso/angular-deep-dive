import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent
    ,ButtonComponent
    ,FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
// onSubmit(titleElement: HTMLInputElement) {
//   const enteredTitle = titleElement.value;
//   console.log(`Entered Title: ${enteredTitle}`);
// }


@ViewChild('form') form?: ElementRef<HTMLFormElement>;
// form = viewChild.required<ElementRef<HTMLFormElement>>('form');
//@Output() add = new EventEmitter<{title: string; text: string}>();
add = output<{title: string; text: string}>();
enteredTitle = '';
enteredText = '';
ngOnInit(): void {
  console.log('On Init');
  console.log(this.form?.nativeElement);
}

ngAfterViewInit() {
  console.log('After View Init');
  console.log(this.form?.nativeElement);
}
// onSubmit(){
//   this.add.emit({title: this.enteredTitle, text: this.enteredText})
//   this.enteredText = '';
//   this.enteredTitle = '';
// }

onSubmit(title: string, ticketText: string) {
  this.add.emit({title: title, text: ticketText})
  //console.log(title);console.log(ticketText);
  // this.form?.nativeElement.reset();
  this.form?.nativeElement.reset();
}

}
