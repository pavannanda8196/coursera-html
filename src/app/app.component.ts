import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fee-collection';
  type = new FormControl('');
  tutionFee = new FormControl('');
  busFee = new FormControl('');
  hostelFee = new FormControl('');
  totalFee = new FormControl('');
  addfee() {
    if (this.type.value == "MSDS") {
      this.tutionFee.setValue(40000);
      this.busFee.setValue(12000);
      this.hostelFee.setValue(0);
      this.totalFee.setValue(this.tutionFee.value + this.busFee.value + this.hostelFee.value);
    } else if (this.type.value == "MSH") {
      this.tutionFee.setValue(40000);
      this.busFee.setValue(0);
      this.hostelFee.setValue(50000);
      this.totalFee.setValue(this.tutionFee.value + this.busFee.value + this.hostelFee.value);
    } else if (this.type.value == "MGSDS") {
      this.tutionFee.setValue((40000 * (150 / 100)));
      this.busFee.setValue(12000);
      this.hostelFee.setValue(0);
      this.totalFee.setValue(this.tutionFee.value + this.busFee.value + this.hostelFee.value);
    } else if (this.type.value == "MGSH") {
      this.tutionFee.setValue((40000 * (150 / 100)));
      this.busFee.setValue(0);
      this.hostelFee.setValue(50000);
      this.totalFee.setValue(this.tutionFee.value + this.busFee.value + this.hostelFee.value);
    } else if (this.type.value == "") {
      this.tutionFee.setValue(0);
      this.busFee.setValue(0);
      this.hostelFee.setValue(0);
      this.totalFee.setValue('');
      alert("Please Enter Student type");

    } else {
      this.tutionFee.setValue(0);
      this.busFee.setValue(0);
      this.hostelFee.setValue(0);
      this.totalFee.setValue('');
      alert("enter the correct student type");
    }
  }
}
