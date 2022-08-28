import { TaskList } from './../../model/task-list';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {

    @Output() public emmitItem: EventEmitter<TaskList> = new EventEmitter<TaskList>();

    public addItemTaskList: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    public submitItemTaskList(): void {
        if (this.addItemTaskList.trim()) {
            this.emmitItem.emit({ name: this.addItemTaskList.trim(), checked: false });
            this.addItemTaskList = '';
        }
    }
}
