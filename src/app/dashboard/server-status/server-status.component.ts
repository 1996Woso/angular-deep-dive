import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
// currentStatus: 'online' | 'offline' | 'unknown' = 'online';/* This tells ts that currentStatus should be 
// string that accept only 'online', 'offline',and 'unknown'*/
currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
private interval?: ReturnType<typeof setInterval>;

constructor(){
  effect(() => {
    console.log(this.currentStatus());
  });
}
ngOnInit(){
  this.interval = setInterval(() => {
    console.log('On Init')
    const randomValue = Math.random();//randomValue belongs to [0,1)

    // if(randomValue < 0.5){
    //   this.currentStatus.set('online');
    // } else if(randomValue < 0.9){
    //   this.currentStatus.set('offline');
    // } else{
    //   this.currentStatus.set('unknown');
    // }

    // // Switch expression
    // switch(true){
    //   case randomValue < 0.5: this.currentStatus = 'online'; break;
    //   case randomValue < 0.9: this.currentStatus = 'offline'; break;
    //   default: this.currentStatus = 'unknown';
    // }

    // // Immediately Invoked Function Expressions (IIFE)
    // const currentStatus = (() => {
    //   if(randomValue < 0.5) return 'online';
    //   if(randomValue < 0.9) return 'offline';
    //   return 'unknown'
    // })();
    // this.currentStatus = currentStatus;

    //Tenary operator
    this.currentStatus.set(
        randomValue < 0.5 
        ? 'online' 
        : randomValue < 0.9 
        ? 'offline' 
        : 'unknown')
  },5000)//5000ms = 5s means that the setInterval functions should the excecuted every 5s
}
ngAfterViewInit(){
  console.log('After View Init');
}
ngOnDestroy(){
  //This removes interval when component is removed from the screen
    clearTimeout(this.interval);
}
}
