import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  my_notes = [
    {id: 1, title: 'Note 1', description: 'Description for note 1'},
    {id: 2, title: 'Note 2', description: 'Description for note 1'},
    {id: 3, title: 'Note 3', description: 'Description for note 1'},
    ];

    // tslint:disable-next-line:variable-name
    show_form = false;
    note = {id: null, title: null, description: null };
    editing = false;

  constructor() { }

  ngOnInit() {
  }

  addNote() {
  this.show_form = true;
  }

  cancel() {
    this.show_form = false;
  }

  createNote() {
    if (this.editing) {
      // EDITAR
       // tslint:disable-next-line:no-var-keyword
       // tslint:disable-next-line:prefer-const
       // tslint:disable-next-line:no-var-keyword
       // tslint:disable-next-line:prefer-const
       let me = this; // alcance global del archivo
       // ITERAR ELEMENTOS DE MY_NOTES PARA VERIFICAR CON LOS NUEVOS DE NOTES
       // tslint:disable-next-line:only-arrow-functions
       this.my_notes.forEach(function(el, i) {
         if (el.id === me.note.id) {
          me.my_notes[i] = me.note;  // asignar y editar el mismo elemento del array
         }
       });
       me.show_form = false;
       console.log(this.my_notes);
    } else {
      // GUARDAR

      this.note.id = Date.now();
      this.my_notes.push(this.note);
      this.show_form = false; // close newNOte
      this.note = {id: null, title: null, description: null };
      console.log(this.note);
    }


  }
  viewNote(note) {
  this.editing = true; // cuando quiero modificar la nota
  this.note = note;
  this.show_form = true;
  }
}


