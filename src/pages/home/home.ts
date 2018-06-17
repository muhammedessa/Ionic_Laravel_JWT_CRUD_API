import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { CrudProvider } from '../../providers/crud/crud';

import { EditPage } from '../edit/edit';
import { InsertPage } from '../insert/insert';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mydata:any
  constructor(public navCtrl: NavController,
    public crudProvider:CrudProvider) {

      this.crudProvider.getPosts().then((data) => {
     
        this.mydata = data["data"] 
        console.log( this.mydata)
      })
    

  }





  onEdit( id, name, details){

    console.log("hoe edit info: "+id  +   details)
    
this.navCtrl.push(EditPage, {

  id:id, 
  name:name, 
  details:details, 
  

})
    
  }






  inserPage(){
    this.navCtrl.push(InsertPage)
  }





  onDelete(id){


    this.crudProvider.deletePosts( id ).then((result)=>{
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("Delete this.id: "+ id)
    })
 

  }






}
