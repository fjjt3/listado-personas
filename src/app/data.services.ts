import { Persona } from './persona.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class DataServices{
    constructor(private httpClient: HttpClient){}
    
    // Get Person
    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-503a9-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }

    // Save Person
    guadarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-503a9-default-rtdb.europe-west1.firebasedatabase.app/datos.json', personas)
        .subscribe(
            response => console.log("resultado guardar Personas: " + response),
                error => console.log("Error al guardar Personas: " + error)
            
        );
    }

    modificarPersona(index:number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-503a9-default-rtdb.europe-west1.firebasedatabase.app/datos/' + index + '.json';
        this.httpClient.put(url, persona)
            .subscribe(
                response => console.log("resultado modificar Persona: " + response)
            ,   error => console.log("Error en modificar Persona: " + error) 
            )
    }
}