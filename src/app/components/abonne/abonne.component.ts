import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Abonne } from 'src/app/models/Abonne.models';
import { AbonneService } from 'src/app/services/abonne.service';

declare var window:any;
@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.css']
})

export class AbonneComponent implements OnInit   {
  abonnes!:any;
  public error?: string;
  formModal!:any;
  formValue!:FormGroup;
  number!:number;
  showAdd!:boolean;
  abonne: Abonne = new Abonne();

  constructor(public formBuilder: FormBuilder, public service: AbonneService) { }

  ngOnInit(): void{

    this.number=-1;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formBuilder.group({
      nom : [''],
      prenom : [''],
      age : [''],
      sexe : [''],
      profession : [''],
      rue : [''],
      code_postal : [''],
      ville : [''],
      paye : [''],
      telephone : [''],
      email : [''],
      id_motivation : [''],
    })
    this.getAbonne();

  }
  openModal(){
    this.formModal.show();

  }
  doSomeThing(){
    this.formModal.hide();
  }
  clickAddAbonne(){
    this.formValue.reset();
    this.showAdd = true;
    
  }

 
  saveAbonne(){
    this.abonne.nom = this.formValue.value.nom;
    this.abonne.prenom = this.formValue.value.prenom;
    this.abonne.age = this.formValue.value.age;
    this.abonne.sexe = this.formValue.value.sexe;
    this.abonne.profession = this.formValue.value.profession;
    this.abonne.rue = this.formValue.value.rue;
    this.abonne.code_postal = this.formValue.value.code_postal;
    this.abonne.ville = this.formValue.value.ville;
    this.abonne.pays = this.formValue.value.pays;
    this.abonne.tel= this.formValue.value.tel;
    this.abonne.email = this.formValue.value.email;
    this.abonne.id_motivation = this.formValue.value.id_motivation;
    this.service.save(this.abonne).subscribe((data: any)=>{
      console.log(data);
      console.log(this.abonne);
      alert('Abonne Enregistree ')
      this.getAbonne();
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();

    },
    ()=>{
      alert("Echec de l'ajout");
    })
  }

 

  getAbonne(){
    this.service.getAbonne()
    .subscribe(data=>{
      this.abonnes=data
    })
  }



  // affectation des donnees pour modification
  modifierAbonne(abonne:any){
   
    this.abonne.id =abonne.id;
    this.number=abonne.id;
    this.formValue.controls['nom'].setValue(abonne.nom);
    this.formValue.controls['prenom'].setValue(abonne.prenom);
    this.formValue.controls['age'].setValue(abonne.age);
    this.formValue.controls['sexe'].setValue(abonne.sexe);
    this.formValue.controls['profession'].setValue(abonne.profession);
    this.formValue.controls['rue'].setValue(abonne.rue);
    this.formValue.controls['code_postal'].setValue(abonne.code_postal);
    this.formValue.controls['ville'].setValue(abonne.ville);
    this.formValue.controls['paye'].setValue(abonne.paye);
    this.formValue.controls['email'].setValue(abonne.email);
    this.formValue.controls['tel'].setValue(abonne.tel);
    this.formValue.controls['id_motivation'].setValue(abonne.id_motivation);
  }

  updateAbonne(){
    this.abonne.nom = this.formValue.value.nom;
    this.abonne.prenom = this.formValue.value.prenom;
    this.abonne.age = this.formValue.value.age;
    this.abonne.sexe = this.formValue.value.sexe;
    this.abonne.profession = this.formValue.value.profession;
    this.abonne.rue = this.formValue.value.rue;
    this.abonne.code_postal = this.formValue.value.code_postal;
    this.abonne.ville = this.formValue.value.ville;
    this.abonne.pays = this.formValue.value.pays;
    this.abonne.tel = this.formValue.value.tel;
    this.abonne.email = this.formValue.value.email;
    this.abonne.id_motivation = this.formValue.value.id_motivation;
    this.service.updateAbonne(this.abonne)
    .subscribe(data=>{
      alert('mise ajour effectue');
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();
      this.getAbonne();
    })
  }

  deleteAbonne(abonne: any){
    this.service.deleteAbonne(abonne.id)
    .subscribe(data=>{
      alert(`Abonne supprime`)
      this.getAbonne();
    })
  }

}
