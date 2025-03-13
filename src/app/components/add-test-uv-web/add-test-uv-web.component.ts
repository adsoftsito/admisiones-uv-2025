import { Component } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';

@Component({
  selector: 'app-add-test-uv-web',
  templateUrl: './add-test-uv-web.component.html',
  styleUrls: ['./add-test-uv-web.component.css'],
})
export class AddTestUvWebComponent {
  test: Test = new Test();
  submitted = false;

  constructor(private testUvWebService: TestUvWebService) {}

  saveTest(): void {
    if (
      !this.test.appPaterno ||
      !this.test.appMaterno ||
      !this.test.nombre ||
      !this.test.programaInteres ||
      (this.test.programaInteres === 'other' && !this.test.otroPrograma) ||
      !this.test.bachilleratoProcedencia ||
      (this.test.bachilleratoProcedencia === 'other' &&
        !this.test.otroBachillerato) ||
      !this.test.telefono ||
      !this.test.email ||
      !this.test.facebook
    ) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    this.submitted = true;
    this.testUvWebService.create(this.test).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTest(): void {
    this.submitted = false;
    this.test = new Test();
  }
}
