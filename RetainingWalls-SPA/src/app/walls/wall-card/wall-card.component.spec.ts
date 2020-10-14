/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WallCardComponent } from './wall-card.component';

describe('WallCardComponent', () => {
  let component: WallCardComponent;
  let fixture: ComponentFixture<WallCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
