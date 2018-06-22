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
import { TestService } from './Test.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Test',
	templateUrl: './Test.component.html',
	styleUrls: ['./Test.component.css'],
  providers: [TestService]
})
export class TestComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          id = new FormControl("", Validators.required);
        
  
      
          nome = new FormControl("", Validators.required);
        
  
      
          descrizione = new FormControl("", Validators.required);
        
  
      
          enteSvolgimento = new FormControl("", Validators.required);
        
  


  constructor(private serviceTest:TestService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          id:this.id,
        
    
        
          nome:this.nome,
        
    
        
          descrizione:this.descrizione,
        
    
        
          enteSvolgimento:this.enteSvolgimento
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceTest.getAll()
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
      $class: "org.torverchain.Test",
      
        
          "id":this.id.value,
        
      
        
          "nome":this.nome.value,
        
      
        
          "descrizione":this.descrizione.value,
        
      
        
          "enteSvolgimento":this.enteSvolgimento.value
        
      
    };

    this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "nome":null,
        
      
        
          "descrizione":null,
        
      
        
          "enteSvolgimento":null
        
      
    });

    return this.serviceTest.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "id":null,
        
      
        
          "nome":null,
        
      
        
          "descrizione":null,
        
      
        
          "enteSvolgimento":null 
        
      
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
      $class: "org.torverchain.Test",
      
        
          
        
    
        
          
            "nome":this.nome.value,
          
        
    
        
          
            "descrizione":this.descrizione.value,
          
        
    
        
          
            "enteSvolgimento":this.enteSvolgimento.value
          
        
    
    };

    return this.serviceTest.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceTest.deleteAsset(this.currentId)
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

    return this.serviceTest.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "id":null,
          
        
          
            "nome":null,
          
        
          
            "descrizione":null,
          
        
          
            "enteSvolgimento":null 
          
        
      };



      
        if(result.id){
          
            formObject.id = result.id;
          
        }else{
          formObject.id = null;
        }
      
        if(result.nome){
          
            formObject.nome = result.nome;
          
        }else{
          formObject.nome = null;
        }
      
        if(result.descrizione){
          
            formObject.descrizione = result.descrizione;
          
        }else{
          formObject.descrizione = null;
        }
      
        if(result.enteSvolgimento){
          
            formObject.enteSvolgimento = result.enteSvolgimento;
          
        }else{
          formObject.enteSvolgimento = null;
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
        
      
        
          "nome":null,
        
      
        
          "descrizione":null,
        
      
        
          "enteSvolgimento":null 
        
      
      });
  }

}
