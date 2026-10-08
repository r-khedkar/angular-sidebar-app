import { Component, inject, signal } from '@angular/core';
import { Injectable } from '@angular/core';

// ── Inline service (scoped to this file for simplicity) ──────────────────────
@Injectable({ providedIn: 'root' })
export class ConfirmModalService {
  isOpen = signal(false);
  open()  { this.isOpen.set(true);  }
  close() { this.isOpen.set(false); }
}

// ── Component ─────────────────────────────────────────────────────────────────
@Component({
  imports: [],
  selector: 'app-confirm-modal',
  styleUrl: './confirm-modal.scss',
  templateUrl: './confirm-modal.html',
})
export class ConfirmModalComponent {
  svc = inject(ConfirmModalService);

  onConfirm() {
    // Add your confirm logic here
    this.svc.close();
  }
}

