export class Etudiant{
  //declaration en general global
  constructor(public  _num: number,
              public _nom: string,
              public _prenom: string) { }
  get num(){
    return this._num;
  }
  get nom(){
    return this._nom;
  }

  get prenom(){
    return this._prenom;
  }

  set num(num: number){
    this._num = num;
  }

  set nom(nom: string){
    this._nom = nom;
  }

  set prenom(prenom: string){
    this._prenom = prenom;
  }
}
