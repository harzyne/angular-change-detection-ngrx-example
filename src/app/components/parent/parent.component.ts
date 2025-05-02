import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  counter = 0;
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  increment() {
    this.counter++;
  }

  changeUserName(index: number) {
    const newUsers = [...this.users];
    newUsers[index] = { ...newUsers[index], name: newUsers[index].name + '!' };
    this.users = newUsers;
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
