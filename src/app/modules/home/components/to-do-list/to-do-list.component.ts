import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

    public taskList: Array<TaskList> = [
        { name: 'Primeira tarefa', checked: true },
        { name: 'Segunda tarefa', checked: false },
    ];

    constructor() { }

    ngDoCheck(): void {
        this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    }

    public deleteItemTaskList(event: number): void {
        this.taskList.splice(event, 1);
    }

    public deleteAllTaskList(): void {
        const confirm: boolean = window.confirm('Você deseja realmente deletar tudo?');
        confirm && (this.taskList = []);
    }

    public validationInput(event: any): void {
        if (!event.currentText?.length) {
            const confirm: boolean = window.confirm('Task está vazia, deseja deletar?');
            confirm && this.deleteItemTaskList(event?.index);
        }
    }

    public setEmmitTaskList(event: TaskList): void {
        this.taskList.push(event);
    }
}
