import { FormGroup } from '@angular/forms';

// Función para validar la contraseña
// Entran dos valores por parametro
export function comparePassword (password: string, passwordRepeat: string){
  return (formGroup: FormGroup) => {
    // Asignamos dos controladores a nuestros valores por param
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[passwordRepeat];
    //  Control de errores
    if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
      return;
    }
    // Setter Errores
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}