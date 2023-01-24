import { Component } from '@angular/core';
import { Pokemon} from '../models/pokemon';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  childSelectedValue!:Pokemon[];
  OnSelectedValueChanged(selectedValues:Pokemon[])
  {
    console.log(selectedValues);
    this.childSelectedValue=selectedValues;
  }
}
