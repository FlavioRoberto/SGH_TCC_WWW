import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoModel } from '../../tipo/model/iTipo';

@Injectable()
export class DisciplinaFormularioService {
    private _form: FormGroup;

    constructor(private _formBuilder: FormBuilder) {

        this._form = this._formBuilder.group({
            codigo: [null],
            descricao: [null, [
                Validators.required,
                Validators.maxLength(100),
                Validators.minLength(1)]
            ]
        });
    }

    get form(): FormGroup {
        return this._form;
    }

    set tipoDisciplina(tipo: TipoModel) {
        if (!tipo)
            return;

        this._form.get('codigoTipo').patchValue(tipo.codigo);
    }

    PrepararCampoAposEdicao(): void {
        this._form.get('codigo').disable();
    }

}
