import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnChanges {
  @Input() user!: { id: number; name: string };

  constructor() {
    console.log(`Child ${this.user?.id} constructed`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child ${this.user?.id} ngOnChanges`, changes);
  }
}
