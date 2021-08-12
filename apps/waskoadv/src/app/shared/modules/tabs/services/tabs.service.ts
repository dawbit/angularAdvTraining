import { Injectable } from '@angular/core';


export interface ITab {
  open: boolean
  toggle(): void
}

@Injectable()
export class TabsService {
  toggle(active: ITab) {

    if (active.open) {
      active.open = false
    } else {

      this.tabs.forEach(tab => {
        tab.open = tab == active
      })
    }
  }

  tabs: ITab[] = []

  removeTab(tab: ITab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1)
  }

  addTab(tab: ITab) {
    this.tabs.push(tab)
  }

  constructor() { }
}
