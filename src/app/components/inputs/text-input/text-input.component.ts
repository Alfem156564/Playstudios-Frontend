import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() id!:string
  @Input() label!:string
  @Input() type!:string
  @Input() placeholder!:string
  @Input() name!:string
  @Input() control: any;

  constructor() {}

  ngOnInit(): void {
  }

  getErrorMessage(): string {
    if (this.control.hasError('required')) {
      return 'This field is required.';
    }
    if (this.control.hasError('email')) {
      return 'This field must be an email.';
    }
    // Agrega más mensajes de error según sea necesario
    return 'This is an invalid field.';
  }
}


