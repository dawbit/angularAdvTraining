import { ChangeDetectorRef, Component, ElementRef, Injector, OnInit } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'wasko-selectable-list-option',
  templateUrl: './selectable-list-option.component.html',
  styleUrls: ['./selectable-list-option.component.scss']
})
export class SelectableListOptionComponent extends MatListOption {

  constructor(
    _element: ElementRef<HTMLElement>,
    _changeDetector: ChangeDetectorRef,
    selectionList: MatSelectionList
  ) {
    super(_element, _changeDetector, selectionList)
  }

  ngOnInit(): void {
  }

}
