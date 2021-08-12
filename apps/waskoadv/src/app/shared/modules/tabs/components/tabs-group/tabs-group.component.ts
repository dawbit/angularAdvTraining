
import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'wasko-tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.scss'],
  providers: [
    {
      provide: TabsService,
      useClass: TabsService
    }
  ]
})
export class TabsGroupComponent implements OnInit {

  // @ViewChildren(TabComponent)
  // @ViewChildren(Tab_TOKEN)

  private _open: number = 0;
  
  public get open(): number {
    return this._open;
  }
  
  @Input('open')
  public set open(value: number) {
    this.service.toggle(this.service.tabs[value])
    this._open = value;
  }

  @Output() openChange = new EventEmitter<number>();

  constructor(
    private service: TabsService
  ) { }

  ngOnInit(): void {
  }

}
