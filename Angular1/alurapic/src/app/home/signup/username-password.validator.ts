import { FormGroup, ValidatorFn } from '@angular/forms';

export const usernamePasswordValidator: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value.trim();
    const password = formGroup.get('password').value.trim();

    console.log(userName,password)
    if (userName === password){
        return {usernamePassword: true};
    } else return null;
}