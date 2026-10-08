import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal';

@Component({
  imports: [],
  selector: 'app-modal',
  styleUrl: './modal.scss',
  templateUrl: './modal.html',
})
export class ModalComponent {
  modalService = inject(ModalService);
}

