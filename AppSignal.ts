import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    {{ arr() }}
    <button (click)="test($event)">Click</button>

    <input [(ngModel)]="input" />
    <p>Debounced value: {{ debounced() }}</p>
    <p>productId {{ productId() }}</p>
  `,
})
export class AppSignal {
  const showCount = signal(false);
  const count = signal(0);
    const conditionalCount = computed(() => {
        if (showCount()) {
        return `The count is ${count()}.`;
      } else {
    return 'Nothing to see here!';
  }
});
}
