/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { TestComponent } from './Test/Test.component';
import { EsameComponent } from './Esame/Esame.component';
import { BozzaCertificatoComponent } from './BozzaCertificato/BozzaCertificato.component';
import { CertificatoComponent } from './Certificato/Certificato.component';


  import { EnteComponent } from './Ente/Ente.component';
  import { BusinessComponent } from './Business/Business.component';
  import { UniversitaComponent } from './Universita/Universita.component';
  import { MemberComponent } from './Member/Member.component';
  import { StudenteComponent } from './Studente/Studente.component';


  import { AuthorizeAccessComponent } from './AuthorizeAccess/AuthorizeAccess.component';
  import { RevokeAccessComponent } from './RevokeAccess/RevokeAccess.component';
  import { RilasciaCertificatoComponent } from './RilasciaCertificato/RilasciaCertificato.component';
  import { RettificaCertificatoComponent } from './RettificaCertificato/RettificaCertificato.component';
  import { RegistraEsameComponent } from './RegistraEsame/RegistraEsame.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Test', component: TestComponent},
    
		{ path: 'Esame', component: EsameComponent},
    
		{ path: 'BozzaCertificato', component: BozzaCertificatoComponent},
    
		{ path: 'Certificato', component: CertificatoComponent},
    
    
      { path: 'Ente', component: EnteComponent},
      
      { path: 'Business', component: BusinessComponent},
      
      { path: 'Universita', component: UniversitaComponent},
      
      { path: 'Member', component: MemberComponent},
      
      { path: 'Studente', component: StudenteComponent},
      
      
        { path: 'AuthorizeAccess', component: AuthorizeAccessComponent},
        
        { path: 'RevokeAccess', component: RevokeAccessComponent},
        
        { path: 'RilasciaCertificato', component: RilasciaCertificatoComponent},
        
        { path: 'RettificaCertificato', component: RettificaCertificatoComponent},
        
        { path: 'RegistraEsame', component: RegistraEsameComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
