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
import { EsameService } from './Esame.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Esame',
	templateUrl: './Esame.component.html',
	styleUrls: ['./Esame.component.css'],
  providers: [EsameService]
})
export class EsameComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          candidato = new FormControl("", Validators.required);
        
  
      
          data = new FormControl("", Validators.required);
        
  
      
          voto = new FormControl("", Validators.required);
        
  
      
          programma = new FormControl("", Validators.required);
        
  
      
          crediti = new FormControl("", Validators.required);
        
  
      
          ssd = new FormControl("", Validators.required);
        
  
      
          id = new FormControl("", Validators.required);
        
  
      
          nome = new FormControl("", Validators.required);
        
  
      
          descrizione = new FormControl("", Validators.required);
        
  
      
          enteSvolgimento = new FormControl("", Validators.required);
        
  


  constructor(private serviceEsame:EsameService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          candidato:this.candidato,
        
    
        
          data:this.data,
        
    
        
          voto:this.voto,
        
    
        
          programma:this.programma,
        
    
        
          crediti:this.crediti,
        
    
        
          ssd:this.ssd,
        
    
        
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
    return this.serviceEsame.getAll()
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
      $class: "org.torverchain.Esame",
      
        
          "candidato":this.candidato.value,
        
      
        
          "data":this.data.value,
        
      
        
          "voto":this.voto.value,
        
      
        
          "programma":this.programma.value,
        
      
        
          "crediti":this.crediti.value,
        
      
        
          "ssd":this.ssd.value,
        
      
        
          "id":this.id.value,
        
      
        
          "nome":this.nome.value,
        
      
        
          "descrizione":this.descrizione.value,
        
      
        
          "enteSvolgimento":this.enteSvolgimento.value
        
      
    };

    this.myForm.setValue({
      
        
          "candidato":null,
        
      
        
          "data":null,
        
      
        
          "voto":null,
        
      
        
          "programma":null,
        
      
        
          "crediti":null,
        
      
        
          "ssd":null,
        
      
        
          "id":null,
        
      
        
          "nome":null,
        
      
        
          "descrizione":null,
        
      
        
          "enteSvolgimento":null
        
      
    });

    return this.serviceEsame.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "candidato":null,
        
      
        
          "data":null,
        
      
        
          "voto":null,
        
      
        
          "programma":null,
        
      
        
          "crediti":null,
        
      
        
          "ssd":null,
        
      
        
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
      $class: "org.torverchain.Esame",
      
        
          
            "candidato":this.candidato.value,
          
        
    
        
          
            "data":this.data.value,
          
        
    
        
          
            "voto":this.voto.value,
          
        
    
        
          
            "programma":this.programma.value,
          
        
    
        
          
            "crediti":this.crediti.value,
          
        
    
        
          
            "ssd":this.ssd.value,
          
        
    
        
          
        
    
        
          
            "nome":this.nome.value,
          
        
    
        
          
            "descrizione":this.descrizione.value,
          
        
    
        
          
            "enteSvolgimento":this.enteSvolgimento.value
          
        
    
    };

    return this.serviceEsame.updateAsset(form.get("id").value,this.asset)
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

    return this.serviceEsame.deleteAsset(this.currentId)
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

    return this.serviceEsame.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "candidato":null,
          
        
          
            "data":null,
          
        
          
            "voto":null,
          
        
          
            "programma":null,
          
        
          
            "crediti":null,
          
        
          
            "ssd":null,
          
        
          
            "id":null,
          
        
          
            "nome":null,
          
        
          
            "descrizione":null,
          
        
          
            "enteSvolgimento":null 
          
        
      };



      
        if(result.candidato){
          
            formObject.candidato = result.candidato;
          
        }else{
          formObject.candidato = null;
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
      
        
          "candidato":null,
        
      
        
          "data":null,
        
      
        
          "voto":null,
        
      
        
          "programma":null,
        
      
        
          "crediti":null,
        
      
        
          "ssd":null,
        
      
        
          "id":null,
        
      
        
          "nome":null,
        
      
        
          "descrizione":null,
        
      
        
          "enteSvolgimento":null 
        
      
      });
  }

}
