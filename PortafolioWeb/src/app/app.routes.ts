import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';  
import { Component } from '@angular/core';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'estudios', component : EstudiosComponent },
    { path: 'contacto', component : ContactoComponent },
    { path: '**', redirectTo: '' },
    
];
