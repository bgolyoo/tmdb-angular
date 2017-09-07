import { OutsideClickDirective } from './outside-click.directive';
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('OutsideClickDirective', () => {
  let fixture: ComponentFixture<OutsideClickDemoComponent>;
  let highlightDebugElement: DebugElement;
  let directive: OutsideClickDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutsideClickDemoComponent, OutsideClickDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(OutsideClickDemoComponent);
    fixture.detectChanges();
    highlightDebugElement = fixture.debugElement.query(By.css('.text'));
    directive = highlightDebugElement.injector.get<OutsideClickDirective>(OutsideClickDirective);
  }));

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
    expect(highlightDebugElement).toBeTruthy();
    expect(directive).toBeTruthy();
  });

});

@Component({
  selector: 'app-outside-click-demo',
  template: `
    <div class="with-directive" appOutsideClick (clickOutside)="closeDropdown()"></div>
    <div class="without-directive"></div>
  `
})
class OutsideClickDemoComponent {

  public closeDropdown(): void { }

}
