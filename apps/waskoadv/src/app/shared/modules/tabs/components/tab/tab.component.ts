import { ElementRef } from '@angular/core';
import { Component, Host, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { ITab, TabsService } from '../../services/tabs.service';
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';

@Component({
  selector: 'wasko-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  providers: [
    {
      provide: 'Tab_TOKEN',
      useExisting: TabComponent
    }
  ]
})
export class TabComponent implements OnInit, ITab {

  @Input() label: string = '';

  @ViewChild('ref', { read: ElementRef, static: false })
  ref?: ElementRef

  open = false

  toggle() {
    // this.open = !this.open
    this.service.toggle(this)
  }

  constructor(
    @Host() @Optional() private _parent: TabsGroupComponent,
    @Host() private service: TabsService,
  ) {
    // debugger
  }

  ngOnInit(): void {
    this.service.addTab(this)
  }

  ngOnDestroy(): void {
    this.service.removeTab(this)
  }

  ngAfterViewChecked(): void {
    this.ref
  }

}
