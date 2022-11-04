import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { SignUpRoutingModule } from './signup-routing.module'
import { SignUpComponent } from './singup.component'

@NgModule({
  imports: [NativeScriptCommonModule, SignUpRoutingModule, NativeScriptFormsModule],
  declarations: [SignUpComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SignUpModule { }
