import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-of-movie',
  templateUrl: './list-of-movie.component.html',
  styleUrls: ['./list-of-movie.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListOfMovieComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['ID', 'Title', 'Property 1', 'Property 2', 'Property 3'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  Title: string;
  ID: number;
  'Property 1': string;
  'Property 2': string;
  'Property 3': string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    ID: 1,
    Title: 'Hydrogen',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'H',
    description: `Hydrogen is a chemical element with 'Property 2' H and atomic number 1. With a standard
        atomic 'Property 1' of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    ID: 2,
    Title: 'Helium',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'He',
    description: `Helium is a chemical element with 'Property 2' He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    ID: 3,
    Title: 'Lithium',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'Li',
    description: `Lithium is a chemical element with 'Property 2' Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    ID: 4,
    Title: 'Beryllium',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'Be',
    description: `Beryllium is a chemical element with 'Property 2' Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    ID: 5,
    Title: 'Boron',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'B',
    description: `Boron is a chemical element with 'Property 2' B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    ID: 6,
    Title: 'Carbon',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'C',
    description: `Carbon is a chemical element with 'Property 2' C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    ID: 7,
    Title: 'Nitrogen',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'N',
    description: `Nitrogen is a chemical element with 'Property 2' N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    ID: 8,
    Title: 'Oxygen',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'O',
    description: `Oxygen is a chemical element with 'Property 2' O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    ID: 9,
    Title: 'Fluorine',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'F',
    description: `Fluorine is a chemical element with 'Property 2' F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    ID: 10,
    Title: 'Neon',
    'Property 1': "Some value",'Property 3': "Some value",
    'Property 2': 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];

// export class ListOfMovieComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
