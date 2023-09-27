import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRoomComponent } from './join-room.component';

describe('JoinRoomComponent', () => {
  let component: JoinRoomComponent;
  let fixture: ComponentFixture<JoinRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinRoomComponent]
    });
    fixture = TestBed.createComponent(JoinRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
