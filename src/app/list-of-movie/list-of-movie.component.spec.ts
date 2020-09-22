import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMovieComponent } from './list-of-movie.component';

describe('ListOfMovieComponent', () => {
  let component: ListOfMovieComponent;
  let fixture: ComponentFixture<ListOfMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
