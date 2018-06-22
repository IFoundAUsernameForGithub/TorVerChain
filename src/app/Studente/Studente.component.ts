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
import { StudenteService } from './Studente.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Studente',
	templateUrl: './Studente.component.html',
	styleUrls: ['./Studente.component.css'],
  providers: [StudenteService]
})
export class StudenteComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          matricola = new FormControl("", Validators.required);
        
  
      
          email = new FormControl("", Validators.required);
        
  
      
          firstName = new FormControl("", Validators.required);
        
  
      
          lastName = new FormControl("", Validators.required);
        
  
      
          codiceFiscale = new FormControl("", Validators.required);
        
  
      
          dob = new FormControl("", Validators.required);
        
  
      
          address = new FormControl("", Validators.required);
        
  
      
          authorized = new FormControl("", Validators.required);
        
  
      
          testSostenuti = new FormControl("", Validators.required);
        
  
      
          certificati = new FormControl("", Validators.required);
        
  


  constructor(private serviceStudente:StudenteService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          matricola:this.matricola,
        
    
        
          email:this.email,
        
    
        
          firstName:this.firstName,
        
    
        
          lastName:this.lastName,
        
    
        
          codiceFiscale:this.codiceFiscale,
        
    
        
          dob:this.dob,
        
    
        
          address:this.address,
        
    
        
          authorized:this.authorized,
        
    
        
          testSostenuti:this.testSostenuti,
        
    
        
          certificati:this.certificati
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceStudente.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
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
   * @param {String} name - the name of the participant field to update
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
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.torverchain.Studente",
      
        
          "matricola":this.matricola.value,
        
      
        
          "email":this.email.value,
        
      
        
          "firstName":this.firstName.value,
        
      
        
          "lastName":this.lastName.value,
        
      
        
          "codiceFiscale":this.codiceFiscale.value,
        
      
        
          "dob":this.dob.value,
        
      
        
          "address":this.address.value,
        
      
        
          "authorized":this.authorized.value,
        
      
        
          "testSostenuti":this.testSostenuti.value,
        
      
        
          "certificati":this.certificati.value
        
      
    };

    this.myForm.setValue({
      
        
          "matricola":null,
        
      
        
          "email":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null,
        
      
        
          "codiceFiscale":null,
        
      
        
          "dob":null,
        
      
        
          "address":null,
        
      
        
          "authorized":null,
        
      
        
          "testSostenuti":null,
        
      
        
          "certificati":null
        
      
    });

    return this.serviceStudente.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "matricola":null,
        
      
        
          "email":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null,
        
      
        
          "codiceFiscale":null,
        
      
        
          "dob":null,
        
      
        
          "address":null,
        
      
        
          "authorized":null,
        
      
        
          "testSostenuti":null,
        
      
        
          "certificati":null 
        
      
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


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "org.torverchain.Studente",
      
        
          
            "matricola":this.matricola.value,
          
        
    
        
          
            "email":this.email.value,
          
        
    
        
          
            "firstName":this.firstName.value,
          
        
    
        
          
            "lastName":this.lastName.value,
          
        
    
        
          
        
    
        
          
            "dob":this.dob.value,
          
        
    
        
          
            "address":this.address.value,
          
        
    
        
          
            "authorized":this.authorized.value,
          
        
    
        
          
            "testSostenuti":this.testSostenuti.value,
          
        
    
        
          
            "certificati":this.certificati.value
          
        
    
    };

    return this.serviceStudente.updateParticipant(form.get("codiceFiscale").value,this.participant)
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


  deleteParticipant(): Promise<any> {

    return this.serviceStudente.deleteParticipant(this.currentId)
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

    return this.serviceStudente.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "matricola":null,
          
        
          
            "email":null,
          
        
          
            "firstName":null,
          
        
          
            "lastName":null,
          
        
          
            "codiceFiscale":null,
          
        
          
            "dob":null,
          
        
          
            "address":null,
          
        
          
            "authorized":null,
          
        
          
            "testSostenuti":null,
          
        
          
            "certificati":null 
          
        
      };



      
        if(result.matricola){
          
            formObject.matricola = result.matricola;
          
        }else{
          formObject.matricola = null;
        }
      
        if(result.email){
          
            formObject.email = result.email;
          
        }else{
          formObject.email = null;
        }
      
        if(result.firstName){
          
            formObject.firstName = result.firstName;
          
        }else{
          formObject.firstName = null;
        }
      
        if(result.lastName){
          
            formObject.lastName = result.lastName;
          
        }else{
          formObject.lastName = null;
        }
      
        if(result.codiceFiscale){
          
            formObject.codiceFiscale = result.codiceFiscale;
          
        }else{
          formObject.codiceFiscale = null;
        }
      
        if(result.dob){
          
            formObject.dob = result.dob;
          
        }else{
          formObject.dob = null;
        }
      
        if(result.address){
          
            formObject.address = result.address;
          
        }else{
          formObject.address = null;
        }
      
        if(result.authorized){
          
            formObject.authorized = result.authorized;
          
        }else{
          formObject.authorized = null;
        }
      
        if(result.testSostenuti){
          
            formObject.testSostenuti = result.testSostenuti;
          
        }else{
          formObject.testSostenuti = null;
        }
      
        if(result.certificati){
          
            formObject.certificati = result.certificati;
          
        }else{
          formObject.certificati = null;
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
      
        
          "matricola":null,
        
      
        
          "email":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null,
        
      
        
          "codiceFiscale":null,
        
      
        
          "dob":null,
        
      
        
          "address":null,
        
      
        
          "authorized":null,
        
      
        
          "testSostenuti":null,
        
      
        
          "certificati":null 
        
      
      });
  }

}
