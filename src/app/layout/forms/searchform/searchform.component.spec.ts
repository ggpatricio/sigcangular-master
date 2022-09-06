import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupformComponent } from './searchform.component';

describe('GroupformComponent', () => {
  let component: GroupformComponent;
  let fixture: ComponentFixture<GroupformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
