import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-day-one 1';
  isDisabled = true;
  username = 'xyz'
  message = ''

  btnClass = {
    isActive: this.isDisabled,
    isActivated: this.isDisabled
  }

  updateTitle() {
    return 'Another title'
  }

  handleToggle() {
    this.isDisabled = !this.isDisabled;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.title = "UPdated title"
    }
  }
  handleKeyDownEnter() {
    this.title = "UPdated title"
  }
}
