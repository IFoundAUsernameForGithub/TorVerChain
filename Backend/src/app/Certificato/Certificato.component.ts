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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CertificatoService } from './Certificato.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Certificato',
	templateUrl: './Certificato.component.html',
	styleUrls: ['./Certificato.component.css'],
  providers: [CertificatoService]
})
export class CertificatoComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          votazione = new FormControl("", Validators.required);
        
  
      
          dataRilascio = new FormControl("", Validators.required);
        
  
      
          valido = new FormControl("", Validators.required);
        
  
      
          member = new FormControl("", Validators.required);
        
  
      
          idcert = new FormControl("", Validators.required);
        
  
      
          titolo = new FormControl("", Validators.required);
        
  
      
          descrizione = new FormControl("", Validators.required);
        
  
      
          testObbligatori = new FormControl("", Validators.required);
        
  
      
          enteRilascio = new FormControl("", Validators.required);
        
  


  constructor(private serviceCertificato:CertificatoService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          votazione:this.votazione,
        
    
        
          dataRilascio:this.dataRilascio,
        
    
        
          valido:this.valido,
        
    
        
          member:this.member,
        
    
        
          idcert:this.idcert,
        
    
        
          titolo:this.titolo,
        
    
        
          descrizione:this.descrizione,
        
    
        
          testObbligatori:this.testObbligatori,
        
    
        
          enteRilascio:this.enteRilascio
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceCertificato.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.torverchain.Certificato",
      
        
          "votazione":this.votazione.value,
        
      
        
          "dataRilascio":this.dataRilascio.value,
        
      
        
          "valido":this.valido.value,
        
      
        
          "member":this.member.value,
        
      
        
          "idcert":this.idcert.value,
        
      
        
          "titolo":this.titolo.value,
        
      
        
          "descrizione":this.descrizione.value,
        
      
        
          "testObbligatori":this.testObbligatori.value,
        
      
        
          "enteRilascio":this.enteRilascio.value
        
      
    };

    this.myForm.setValue({
      
        
          "votazione":null,
        
      
        
          "dataRilascio":null,
        
      
        
          "valido":null,
        
      
        
          "member":null,
        
      
        
          "idcert":null,
        
      
        
          "titolo":null,
        
      
        
          "descrizione":null,
        
      
        
          "testObbligatori":null,
        
      
        
          "enteRilascio":null
        
      
    });

    return this.serviceCertificato.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "votazione":null,
        
      
        
          "dataRilascio":null,
        
      
        
          "valido":null,
        
      
        
          "member":null,
        
      
        
          "idcert":null,
        
      
        
          "titolo":null,
        
      
        
          "descrizione":null,
        
      
        
          "testObbligatori":null,
        
      
        
          "enteRilascio":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.torverchain.Certificato",
      
        
          
            "votazione":this.votazione.value,
          
        
    
        
          
            "dataRilascio":this.dataRilascio.value,
          
        
    
        
          
            "valido":this.valido.value,
          
        
    
        
          
            "member":this.member.value,
          
        
    
        
          
        
    
        
          
            "titolo":this.titolo.value,
          
        
    
        
          
            "descrizione":this.descrizione.value,
          
        
    
        
          
            "testObbligatori":this.testObbligatori.value,
          
        
    
        
          
            "enteRilascio":this.enteRilascio.value
          
        
    
    };

    return this.serviceCertificato.updateAsset(form.get("idcert").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceCertificato.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceCertificato.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "votazione":null,
          
        
          
            "dataRilascio":null,
          
        
          
            "valido":null,
          
        
          
            "member":null,
          
        
          
            "idcert":null,
          
        
          
            "titolo":null,
          
        
          
            "descrizione":null,
          
        
          
            "testObbligatori":null,
          
        
          
            "enteRilascio":null 
          
        
      };



      
        if(result.votazione){
          
            formObject.votazione = result.votazione;
          
        }else{
          formObject.votazione = null;
        }
      
        if(result.dataRilascio){
          
            formObject.dataRilascio = result.dataRilascio;
          
        }else{
          formObject.dataRilascio = null;
        }
      
        if(result.valido){
          
            formObject.valido = result.valido;
          
        }else{
          formObject.valido = null;
        }
      
        if(result.member){
          
            formObject.member = result.member;
          
        }else{
          formObject.member = null;
        }
      
        if(result.idcert){
          
            formObject.idcert = result.idcert;
          
        }else{
          formObject.idcert = null;
        }
      
        if(result.titolo){
          
            formObject.titolo = result.titolo;
          
        }else{
          formObject.titolo = null;
        }
      
        if(result.descrizione){
          
            formObject.descrizione = result.descrizione;
          
        }else{
          formObject.descrizione = null;
        }
      
        if(result.testObbligatori){
          
            formObject.testObbligatori = result.testObbligatori;
          
        }else{
          formObject.testObbligatori = null;
        }
      
        if(result.enteRilascio){
          
            formObject.enteRilascio = result.enteRilascio;
          
        }else{
          formObject.enteRilascio = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "votazione":null,
        
      
        
          "dataRilascio":null,
        
      
        
          "valido":null,
        
      
        
          "member":null,
        
      
        
          "idcert":null,
        
      
        
          "titolo":null,
        
      
        
          "descrizione":null,
        
      
        
          "testObbligatori":null,
        
      
        
          "enteRilascio":null 
        
      
      });
  }

}
