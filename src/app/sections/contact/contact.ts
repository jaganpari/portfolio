import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,  FormGroupDirective
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import emailjs from '@emailjs/browser';
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private toastService = inject(ToastService);

  fb = inject(FormBuilder);

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  submitted = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  submit() {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    emailjs.send(
      'service_ex4lm1k',
      'template_2q5ek9h',
      {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      },
      'wrp_AqemDG7bObn32'
    )
      .then(() => {
        this.toastService.showSuccess('Email sent successfully!');
        this.contactForm.reset();
        this.formGroupDirective.resetForm();
        this.submitted = false;
      })
      .catch((error) => {
        console.error(error);
        this.toastService.showError('Failed to send email.');
        this.submitted = false;
      });

  }
}