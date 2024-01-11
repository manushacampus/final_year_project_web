import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import {SECTION_CATEGORY} from "../../types/SECTION_CATEGORY";
@Injectable({
  providedIn: 'root'
})
export class CategoryFilterService {
private filterMode = new BehaviorSubject<SECTION_CATEGORY>('ALL')
  constructor() { }

  setFilterMode(mode:SECTION_CATEGORY){
  this.filterMode.next(mode)
  }
  getFilterMode(){
  return this.filterMode.asObservable()
  }
}
