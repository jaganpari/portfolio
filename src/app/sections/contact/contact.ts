import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import emailjs from '@emailjs/browser';

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

  fb = inject(FormBuilder);

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
    alert('Email sent successfully!');
    this.contactForm.reset();
  })
  .catch((error) => {
    console.error(error);
    alert('Failed to send email.');
  });

}
}