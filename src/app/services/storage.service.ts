import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: string){
    return localStorage.getItem(key)
  }

  set(key: string, value: string){
    localStorage.setItem(key, value)
  }

  remove(key: string){
    localStorage.removeItem(key)
  }
}
