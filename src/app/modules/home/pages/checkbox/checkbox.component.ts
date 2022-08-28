import { TaskList } from './../../model/task-list';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    @Input() public props: Partial<TaskList> = {};

    @Input() public readonly: boolean = false;

    @Input() public index: number = 0;

    @Output() public propsChange: EventEmitter<TaskList> = new EventEmitter<TaskList>();

    @Output() public onSelectedIndex: EventEmitter<number> = new EventEmitter<number>();

    @Output() public onKeyUp: EventEmitter<{ currentText: string | undefined; index: number }> = new EventEmitter<{ currentText: string | undefined; index: number }>();

    constructor() { }

    ngOnInit(): void {
    }

    public emmitSelectedIndex(): void {
        this.onSelectedIndex.emit(this.index);
    }

    public keyUpOnInputText(currentText: string | undefined, index: number): void {
        this.onKeyUp.emit({ currentText, index });
    }

}
