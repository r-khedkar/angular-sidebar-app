import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { ModalComponent } from './components/modal/modal';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal';

@Component({
  imports: [RouterOutlet, Sidebar, ModalComponent, ConfirmModalComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  title = 'model-popup';
}

