import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ionViewWillLeave(){
   console.log("Will leave")
  }
 
  ionViewDidEnter(){
   console.log("Did Enter")
  }

  ionViewWillEnter(){
    console.log("Will Enter")
   
  }

  ionViewDidLeave() {
    console.log("Did leave");
  }


  ngOnInit()
  {
    console.log("La página se ha creado");
  }
  

}
