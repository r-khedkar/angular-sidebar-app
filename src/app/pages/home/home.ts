import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal';
import { ConfirmModalService } from '../../components/confirm-modal/confirm-modal';
import { WhiteModalService } from '../../services/white-modal';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  modalService = inject(ModalService);
  confirmModalService = inject(ConfirmModalService);
  whiteModalService = inject(WhiteModalService);
}
