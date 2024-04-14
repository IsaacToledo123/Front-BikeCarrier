import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuPassComponent } from './recu-pass.component';

describe('RecuPassComponent', () => {
  let component: RecuPassComponent;
  let fixture: ComponentFixture<RecuPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
