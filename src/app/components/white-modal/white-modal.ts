import { Component, inject } from '@angular/core';
import { WhiteModalService } from '../../services/white-modal';

@Component({
  imports: [],
  selector: 'app-white-modal',
  styleUrl: './white-modal.scss',
  templateUrl: './white-modal.html',
})
export class WhiteModalComponent {
  modalService = inject(WhiteModalService);

  onConfirm() {
    this.modalService.close();
  }
}
