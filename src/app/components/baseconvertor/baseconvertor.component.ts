import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-baseconvertor',
  templateUrl: './baseconvertor.component.html',
  styleUrls: ['./baseconvertor.component.css']
})
export class BaseconvertorComponent implements OnInit {

  //Reactive Form
binaryCount = 0;
octalCount = 0;
hexCount = 0;
form;


  ngOnInit() {
    this.form = new FormGroup({
      decimal : new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexa: new FormControl("")
    });
  }

  clear(){
    this.form.patchValue({decimal:""});
  }
  
  decimalChanged(oldValue, newValue){
  if(newValue != ""){
    this.form.patchValue({binary: parseInt(newValue, 10).toString(2)});
    this.form.patchValue({octal: parseInt(newValue, 10).toString(8)})
    this.form.patchValue({hexa: parseInt(newValue, 10).toString(16).toUpperCase()});
  }else{
    this.form.patchValue({binary: ""});
    this.form.patchValue({octal: ""});
    this.form.patchValue({hexa: ""});
  }
  }
  
  binaryChanged(oldValue, newValue){
    this.binaryCount += 1;
  
    if(this.binaryCount == 1){
      if(newValue != ""){
        this.form.patchValue({decimal: parseInt(newValue, 2).toString(10)});
      }else{
        this.form.patchValue({decimal: ""});
      }  
      this.binaryCount = 0;
    }
    
    }
  
  
    octalChanged(oldValue, newValue){
      this.octalCount += 1;
    
      if(this.octalCount == 1){
        if(newValue != ""){
          this.form.patchValue({decimal: parseInt(newValue, 8).toString(10)});
        }else{
          this.form.patchValue({decimal: ""});
        }  
        this.octalCount = 0;
      }
      
      }
  
      hexChanged(oldValue, newValue){
        this.hexCount += 1;
      
        if(this.hexCount == 1){
          if(newValue != ""){
            this.form.patchValue({decimal: parseInt(newValue, 16).toString(10)});
          }else{
            this.form.patchValue({decimal: ""});
          }  
          this.hexCount = 0;
        }
       
        }

}
