import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  ngOnInit(): void {
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenuDropdown = document.querySelector('.user-menu-dropdown');

    if (userMenuButton && userMenuDropdown) {
      userMenuButton.addEventListener('mouseenter', () => {
        userMenuDropdown.classList.remove('hidden');
      });

      userMenuDropdown.addEventListener('mouseleave', () => {
        userMenuDropdown.classList.add('hidden');
      });
    }
  }
}
