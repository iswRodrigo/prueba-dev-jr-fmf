import { Clubes } from "./clubes";
import { Genero } from "./genero";
import { Nacionalidades } from "./nacionalidades";

export interface Persona {
  nombreP : string;
  apPaterno : string;
  apMaterno : string;
  fechaNac : string;
  generoP: Genero;
  nacionalidadP: Nacionalidades;
  rfcP:string;
  ocupacionP : string;
  clubP:Clubes;
}
