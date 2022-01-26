import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2022-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2022-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2022-01-04',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString()
      }
    }, 500);
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }
/*   title = 'Lista zadań';

  get footer(): string {
    return '© Lista zadań, All rights reserved.'; //zapis TypeScript'owy z użyciem get
  }

  getFooter(): string {
    return '2022 © Lista zadań, All rights reserved.'; //pole klasy (metoda)
  }

  getDate(): Date {
    return new Date();
  } */
}
