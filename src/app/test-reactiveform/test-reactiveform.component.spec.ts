import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReactiveformComponent } from './test-reactiveform.component';

describe('TestReactiveformComponent', () => {
  let component: TestReactiveformComponent;
  let fixture: ComponentFixture<TestReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReactiveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
