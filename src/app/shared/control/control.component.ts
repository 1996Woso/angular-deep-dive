import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    //this adds class attribute wherever this component is used
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  /* HostBinding (old method that) works similar to host attribute */

  // @HostBinding() class = 'control';
  // @HostBinding('class') className = 'control';
  /**************************/
  //HostListener

  // @HostListener('click')
  //    onClick(){
  //   console.log('Clicked!!')
  // }
  /**************************/
  //Accessing host elements programmatically

  private element_ = inject(ElementRef);
  label = input.required<string>();

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  constructor(){
    //This method is triggered everytime there is a change in the entire application
    afterRender(() => {
      console.log('afterRender');
    });
    //This is triggered for the next change in the application
    afterNextRender(() => {
      console.log('afterNextRender');
    })
  }

  ngAfterContentInit() {
      
  }
  onClick() {
    console.log('Clicked!');
    console.log(this.element_);
    console.log(this.control());
  }
}
