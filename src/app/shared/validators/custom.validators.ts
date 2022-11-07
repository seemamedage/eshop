import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMismatch(control:AbstractControl):ValidationErrors | null {
    // const value = control
    const password = control.get('password')?.value;
    const confirmpassword =control.get('confirmpassword')?.value;

     if(password!= confirmpassword){
        return {'passwordMismatch':true}
     }
     else{ 
         return null;
         }
}