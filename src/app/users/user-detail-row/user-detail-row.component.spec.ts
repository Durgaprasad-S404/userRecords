import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailRowComponent } from './user-detail-row.component';

describe('UserDetailRowComponent', () => {
  let component: UserDetailRowComponent;
  let fixture: ComponentFixture<UserDetailRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
