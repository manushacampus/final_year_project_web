import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-management-all',
  templateUrl: './delivery-management-all.component.html',
  styleUrls: ['./delivery-management-all.component.scss']
})
export class DeliveryManagementAllComponent {
  selectedTabIndex = 0;
  goToNextTab() {
    if (this.selectedTabIndex < 1) { // Assuming there are 3 tabs
      this.selectedTabIndex++;
    }
  }
  goToPreviousTab() {
    if (this.selectedTabIndex > 0) {
      this.selectedTabIndex--;
    }
  }
}
