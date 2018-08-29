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
import { UniversitaService } from './Universita.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Universita',
	templateUrl: './Universita.component.html',
	styleUrls: ['./Universita.component.css'],
  providers: [UniversitaService]
})
export class UniversitaComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          nomeUniversita = new FormControl("", Validators.required);
        
  
      
          id = new FormControl("", Validators.required);
        
  
      
          address1 = new FormControl("", Validators.required);
        
  
      
          addresses = new FormControl("", Validators.required);
        
  
      
          country = new FormControl("", Validators.required);
        
  
      
          postcode = new FormControl("", Validators.required);
        
  


  constructor(private serviceUniversita:UniversitaService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          nomeUniversita:this.nomeUniversita,
        
    
        
          id:this.id,
        
    
        
          address1:this.address1,
        
    
        
          addresses:this.addresses,
        
    
        
          country:this.country,
        
    
        
          postcode:this.postcode
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceUniversita.getAll()
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
      $class: "org.torverchain.Universita",
      
        
          "nomeUniversita":this.nomeUniversita.value,
        
      
        
          "id":this.id.value,
        
      
        
          "address1":this.address1.value,
        
      
        
          "addresses":this.addresses.value,
        
      
        
          "country":this.country.value,
        
      
        
          "postcode":this.postcode.value
        
      
    };

    this.myForm.setValue({
      
        
          "nomeUniversita":null,
        
      
        
          "id":null,
        
      
        
          "address1":null,
        
      
        
          "addresses":null,
        
      
        
          "country":null,
        
      
        
          "postcode":null
        
      
    });

    return this.serviceUniversita.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "nomeUniversita":null,
        
      
        
          "id":null,
        
      
        
          "address1":null,
        
      
        
          "addresses":null,
        
      
        
          "country":null,
        
      
        
          "postcode":null 
        
      
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
      $class: "org.torverchain.Universita",
      
        
          
            "nomeUniversita":this.nomeUniversita.value,
          
        
    
        
          
        
    
        
          
            "address1":this.address1.value,
          
        
    
        
          
            "addresses":this.addresses.value,
          
        
    
        
          
            "country":this.country.value,
          
        
    
        
          
            "postcode":this.postcode.value
          
        
    
    };

    return this.serviceUniversita.updateParticipant(form.get("id").value,this.participant)
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

    return this.serviceUniversita.deleteParticipant(this.currentId)
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

    return this.serviceUniversita.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "nomeUniversita":null,
          
        
          
            "id":null,
          
        
          
            "address1":null,
          
        
          
            "addresses":null,
          
        
          
            "country":null,
          
        
          
            "postcode":null 
          
        
      };



      
        if(result.nomeUniversita){
          
            formObject.nomeUniversita = result.nomeUniversita;
          
        }else{
          formObject.nomeUniversita = null;
        }
      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.address1){
          
            formObject.address1 = result.address1;
          
        }else{
          formObject.address1 = null;
        }
      
        if(result.addresses){
          
            formObject.addresses = result.addresses;
          
        }else{
          formObject.addresses = null;
        }
      
        if(result.country){
          
            formObject.country = result.country;
          
        }else{
          formObject.country = null;
        }
      
        if(result.postcode){
          
            formObject.postcode = result.postcode;
          
        }else{
          formObject.postcode = null;
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
      
        
          "nomeUniversita":null,
        
      
        
          "id":null,
        
      
        
          "address1":null,
        
      
        
          "addresses":null,
        
      
        
          "country":null,
        
      
        
          "postcode":null 
        
      
      });
  }

}
