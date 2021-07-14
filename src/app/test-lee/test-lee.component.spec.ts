import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLeeComponent } from './test-lee.component';

describe('TestLeeComponent', () => {
  let component: TestLeeComponent;
  let fixture: ComponentFixture<TestLeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
