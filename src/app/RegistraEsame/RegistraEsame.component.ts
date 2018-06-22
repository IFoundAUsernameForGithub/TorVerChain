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
import { RegistraEsameService } from './RegistraEsame.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-RegistraEsame',
	templateUrl: './RegistraEsame.component.html',
	styleUrls: ['./RegistraEsame.component.css'],
  providers: [RegistraEsameService]
})
export class RegistraEsameComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
	private errorMessage;

  
      
          id = new FormControl("", Validators.required);
        
  
      
          data = new FormControl("", Validators.required);
        
  
      
          voto = new FormControl("", Validators.required);
        
  
      
          programma = new FormControl("", Validators.required);
        
  
      
          crediti = new FormControl("", Validators.required);
        
  
      
          ssd = new FormControl("", Validators.required);
        
  
      
          enteSvolgimento = new FormControl("", Validators.required);
        
  
      
          sostenitore = new FormControl("", Validators.required);
        
  
      
          testSostenuto = new FormControl("", Validators.required);
        
  
      
          transactionId = new FormControl("", Validators.required);
        
  
      
          timestamp = new FormControl("", Validators.required);
        
  


  constructor(private serviceRegistraEsame:RegistraEsameService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          data:this.data,
        
    
        
          voto:this.voto,
        
    
        
          programma:this.programma,
        
    
        
          crediti:this.crediti,
        
    
        
          ssd:this.ssd,
        
    
        
          enteSvolgimento:this.enteSvolgimento,
        
    
        
          sostenitore:this.sostenitore,
        
    
        
          testSostenuto:this.testSostenuto,
        
    
        
          transactionId:this.transactionId,
        
    
        
          timestamp:this.timestamp
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceRegistraEsame.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
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
   * @param {String} name - the name of the transaction field to update
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
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "org.torverchain.RegistraEsame",
      
        
          "id":this.id.value,
        
      
        
          "data":this.data.value,
        
      
        
          "voto":this.voto.value,
        
      
        
          "programma":this.programma.value,
        
      
        
          "crediti":this.crediti.value,
        
      
        
          "ssd":this.ssd.value,
        
      
        
          "enteSvolgimento":this.enteSvolgimento.value,
        
      
        
          "sostenitore":this.sostenitore.value,
        
      
        
          "testSostenuto":this.testSostenuto.value,
        
      
        
          "transactionId":this.transactionId.value,
        
      
        
          "timestamp":this.timestamp.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "data":null,
        
      
        
          "voto":null,
        
      
        
          "programma":null,
        
      
        
          "crediti":null,
        
      
        
          "ssd":null,
        
      
        
          "enteSvolgimento":null,
        
      
        
          "sostenitore":null,
        
      
        
          "testSostenuto":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null
        
      
    });

    return this.serviceRegistraEsame.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "data":null,
        
      
        
          "voto":null,
        
      
        
          "programma":null,
        
      
        
          "crediti":null,
        
      
        
          "ssd":null,
        
      
        
          "enteSvolgimento":null,
        
      
        
          "sostenitore":null,
        
      
        
          "testSostenuto":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
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


   updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "org.torverchain.RegistraEsame",
      
        
          
            "id":this.id.value,
          
        
    
        
          
            "data":this.data.value,
          
        
    
        
          
            "voto":this.voto.value,
          
        
    
        
          
            "programma":this.programma.value,
          
        
    
        
          
            "crediti":this.crediti.value,
          
        
    
        
          
            "ssd":this.ssd.value,
          
        
    
        
          
            "enteSvolgimento":this.enteSvolgimento.value,
          
        
    
        
          
            "sostenitore":this.sostenitore.value,
          
        
    
        
          
            "testSostenuto":this.testSostenuto.value,
          
        
    
        
          
        
    
        
          
            "timestamp":this.timestamp.value
          
        
    
    };

    return this.serviceRegistraEsame.updateTransaction(form.get("transactionId").value,this.Transaction)
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


  deleteTransaction(): Promise<any> {

    return this.serviceRegistraEsame.deleteTransaction(this.currentId)
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

    return this.serviceRegistraEsame.getTransaction(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "data":null,
          
        
          
            "voto":null,
          
        
          
            "programma":null,
          
        
          
            "crediti":null,
          
        
          
            "ssd":null,
          
        
          
            "enteSvolgimento":null,
          
        
          
            "sostenitore":null,
          
        
          
            "testSostenuto":null,
          
        
          
            "transactionId":null,
          
        
          
            "timestamp":null 
          
        
      };



      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.data){
          
            formObject.data = result.data;
          
        }else{
          formObject.data = null;
        }
      
        if(result.voto){
          
            formObject.voto = result.voto;
          
        }else{
          formObject.voto = null;
        }
      
        if(result.programma){
          
            formObject.programma = result.programma;
          
        }else{
          formObject.programma = null;
        }
      
        if(result.crediti){
          
            formObject.crediti = result.crediti;
          
        }else{
          formObject.crediti = null;
        }
      
        if(result.ssd){
          
            formObject.ssd = result.ssd;
          
        }else{
          formObject.ssd = null;
        }
      
        if(result.enteSvolgimento){
          
            formObject.enteSvolgimento = result.enteSvolgimento;
          
        }else{
          formObject.enteSvolgimento = null;
        }
      
        if(result.sostenitore){
          
            formObject.sostenitore = result.sostenitore;
          
        }else{
          formObject.sostenitore = null;
        }
      
        if(result.testSostenuto){
          
            formObject.testSostenuto = result.testSostenuto;
          
        }else{
          formObject.testSostenuto = null;
        }
      
        if(result.transactionId){
          
            formObject.transactionId = result.transactionId;
          
        }else{
          formObject.transactionId = null;
        }
      
        if(result.timestamp){
          
            formObject.timestamp = result.timestamp;
          
        }else{
          formObject.timestamp = null;
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
      
        
          "id":null,
        
      
        
          "data":null,
        
      
        
          "voto":null,
        
      
        
          "programma":null,
        
      
        
          "crediti":null,
        
      
        
          "ssd":null,
        
      
        
          "enteSvolgimento":null,
        
      
        
          "sostenitore":null,
        
      
        
          "testSostenuto":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
  }

}

