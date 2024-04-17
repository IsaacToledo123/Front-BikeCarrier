import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogLugarComponent } from './log-lugar.component';

describe('LogLugarComponent', () => {
  let component: LogLugarComponent;
  let fixture: ComponentFixture<LogLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogLugarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
