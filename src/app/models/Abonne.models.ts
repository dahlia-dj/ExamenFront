import { Motivation } from "./Motivation.models";

export class Abonne{
  public id?:number;
  public nom?:String;
  public prenom?:String;
  public age?:number;
  public sexe?:String;
  public profession?:String;
  public rue?:String;
  public code_postal?:String;
  public ville?:String;
  public pays?:String;
  public tel?:String;
  public email?:String;
  public id_motivation?:Motivation;

}