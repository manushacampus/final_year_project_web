import { Component } from '@angular/core';
import {DoorService} from "../../../../../../core/services/api/door.service";

@Component({
  selector: 'app-product-door-form',
  templateUrl: './product-door-form.component.html',
  styleUrls: ['./product-door-form.component.scss']
})
export class ProductDoorFormComponent {
  constructor(
    private doorService: DoorService
  ) {}

  createDoor(){
    this.doorService.createDoor().subscribe(
      data => {
        if (data === 'Success') {
          console.log("Door created successfully!");
        } else {
          console.error("Unexpected response:", data);
        }
      },
      error => {
        console.error("Error creating door:", error);
      }
    );
  }

}
