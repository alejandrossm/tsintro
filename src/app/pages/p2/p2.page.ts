import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  numero:number=0;
  resultado:number=0;
  nombre:string;
  lista:any=[];
  otralista:any=[];
  cuenta:number=0;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("hola Mundo!!!")
  }

  sumar()
  {
  
    let y=1;
    this.numero=1;
    this.resultado=this.numero+y;
    

  }

  agregar()
  {
    this.cuenta++;
    //this.lista[this.cuenta-1]=this.cuenta;
    this.lista.unshift(this.cuenta);
    this.otralista.push(this.cuenta);
    console.log("Lista");
    console.log(this.lista);
    console.log("Otra Lista");
    console.log(this.otralista);
  }

  mostrarClase(me){

    console.log(me.lista[1]);
  }

  mostrarEvento(evento)
  {
    console.log(evento.srcElement.id);
    let idelemento=evento.srcElement.id
    document.getElementById(idelemento).setAttribute('disabled','true');
  }

}
