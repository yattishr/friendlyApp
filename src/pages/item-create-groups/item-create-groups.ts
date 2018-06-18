import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-create-groups',
  templateUrl: 'item-create-groups.html'
})
export class ItemCreateGroupPage {

  public form: FormGroup;

  isReadyToSave: boolean;

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private _FB: FormBuilder) {
    this.form = this._FB.group({
      groupName: ['', Validators.required],
      name: [''],
      technologies: this._FB.array([
         this.initTechnologyFields()
      ])
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  // /**
  //  * Generates a FormGroup object with input field validation rules for
  //  * the technologies form object
  //  *
  //  * @public
  //  * @method initTechnologyFields
  //  * @return {FormGroup}
  //  */
  initTechnologyFields() : FormGroup
  {
     return this._FB.group({
        name : ['', Validators.required]
     });
  }


  // /**
  //  * Programmatically generates a new technology input field
  //  *
  //  * @public
  //  * @method addNewInputField
  //  * @return {none}
  //  */
  addNewInputField() : void
  {
     const control = <FormArray>this.form.controls.technologies;
     control.push(this.initTechnologyFields());
  }

  // /**
  //  * Programmatically removes a recently generated technology input field
  //  *
  //  * @public
  //  * @method removeInputField
  //  * @param i    {number}      The position of the object in the array that needs to removed
  //  * @return {none}
  //  */
  removeInputField(i : number) : void
  {
     const control = <FormArray>this.form.controls.technologies;
     control.removeAt(i);
  }

  // /**
  //  * Receive the submitted form data
  //  *
  //  * @public
  //  * @method manage
  //  * @param val    {object}      The posted form data
  //  * @return {none}
  //  */
  manage(val : any) : void
  {
     console.dir(val);
  }

  ionViewDidLoad() {

  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

}
