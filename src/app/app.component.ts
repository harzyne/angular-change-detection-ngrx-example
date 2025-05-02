import { Component } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `<h1>Angular Change Detection Example</h1><app-parent />`,
})
export class AppComponent {}