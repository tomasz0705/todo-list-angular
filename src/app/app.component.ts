import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string } | null = null;

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString()
      }
    }, 500);
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
