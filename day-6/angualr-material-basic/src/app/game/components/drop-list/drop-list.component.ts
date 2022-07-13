import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOption } from '../../models/selectOption';

@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.scss']
})
export class DropListComponent implements OnInit {
  @Input('options') selectionOptions: SelectOption[] = [];
  @Output() optionChange = new EventEmitter<SelectOption>();
  selectedOption = '';
  constructor() { }

  ngOnInit(): void {
  }

  handleOptionChange(option: SelectOption) {
    this.selectedOption = option.text;
    this.optionChange.emit(option);
  }
}
