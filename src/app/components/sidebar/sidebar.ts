import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [NgFor, RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  menuItems = [
    { label: '🏠 Home', route: '/home' },
    { label: '📖 About', route: '/about' },
    { label: '⚙️ Services', route: '/services' },
    { label: '📞 Contact', route: '/contact' },
  ];
}

