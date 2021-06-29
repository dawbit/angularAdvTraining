import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'wasko-clock',
  template: `
    <span>{{time}}</span>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {

  time = '00:00'

  constructor(private cdr: ChangeDetectorRef, private ngZone:NgZone) {
    // cdr.detach()

    ngZone.runOutsideAngular(()=>{
      setInterval(() => {
        this.time = (new Date()).toLocaleTimeString()
  
        this.cdr.detectChanges()
        // this.cdr.markForCheck()
      }, 1000)

    })


    // ASSERTION ERROR: Should be run in update mode [Expected=> false == true <=Actual]
    // this.cdr.detectChanges()
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // this.time = (new Date()).toLocaleTimeString()
    // this.cdr.detectChanges()
    // console.log('tick')
  }

  ngOnInit(): void {
    // this.cdr.detectChanges()
  }

}
