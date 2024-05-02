import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMusicsComponent } from './fav-musics.component';

describe('FavMusicsComponent', () => {
  let component: FavMusicsComponent;
  let fixture: ComponentFixture<FavMusicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavMusicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavMusicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
