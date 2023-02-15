import { Persona } from './persona.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class DataServices{
    constructor(private httpClient: HttpClient){}

    // Save Person
    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-503a9-default-rtdb.europe-west1.firebasedatabase.app/datos.json', personas)
        .subscribe(
            response => console.log("resultado guardar Personas " + response),
                error => console.log("Error al guardar Personas " + error)
            
        );
    }
}