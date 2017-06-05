//import {computedFrom} from 'aurelia-framework';

export class expense {
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;
  expense="";
  nameArray=[];
  sum=0;

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
 get total(){
   debugger;
   return this.sum + Number(this.expense);
 }

   add1() {

          this.sum = this.sum + Number(this.expense);

          this.nameArray.unshift({ ExpName: this.ExpName, expense: this.expense, sum: this.sum });
          this.expense = "";
          this.ExpName = "";
        };


  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
