import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isSLideOut = true;
  constructor(private _router: Router) { }
  toggleSlideOut(): void {
    this.isSLideOut = !this.isSLideOut;
  }

  onDash() {
    this._router.navigate(['/dashboard']);
  }

  onProfile() {
    this._router.navigate(['/profile']);
  }

  onHistory() {
    this._router.navigate(['/history']);
  }

  onLogout() {
    this._router.navigate(['/login']);
  }
}
