import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { ModalComponent } from './components/modal/modal';

@Component({
  imports: [RouterOutlet, Sidebar, ModalComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  title = 'model-popup';
}

