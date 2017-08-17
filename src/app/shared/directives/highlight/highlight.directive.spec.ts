import { HighlightDirective } from './highlight.directive';
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const INPUT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a erat varius, pellentesque ' +
  'ligula quis, dapibus purus. Morbi ornare feugiat accumsan. Sed ullamcorper velit a odio efficitur accumsan. ' +
  'Ut maximus risus vel nunc finibus, at aliquet elit semper. Praesent quis nisl neque. Proin leo tellus, ultrices ' +
  'ac elit quis, gravida volutpat velit. Maecenas porttitor odio placerat faucibus dignissim. Maecenas ut nunc ut ' +
  'mi pulvinar maximus. Integer varius non erat feugiat consectetur.';

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<HighlightDemoComponent>;
  let highlightDebugElement: DebugElement;
  let directive: HighlightDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDemoComponent, HighlightDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightDemoComponent);
    fixture.detectChanges();
    highlightDebugElement = fixture.debugElement.query(By.css('.text'));
    directive = highlightDebugElement.injector.get<HighlightDirective>(HighlightDirective);
  }));

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
    expect(highlightDebugElement).toBeTruthy();
    expect(directive).toBeTruthy();
  });

});

// describe('HighlightDirective', () => {





//   it('should have highlighted text in innerHTML of element', () => {
//     expect(highlightDebugElement.nativeElement['innerHTML']).toEqual(EXPECTED_INNER_HTML);
//   });

//   it('should emit false on mouseleave event on directive element', () => {
//     const emit = spyOn(directive.hovered, 'emit');
//     highlightDebugElement.triggerEventHandler('mouseleave', null);
//     expect(emit).toHaveBeenCalled();
//     expect(emit).toHaveBeenCalledWith(false);
//   });

//   it('should emit true on mouseover event on directive element if any entity element is hovered', () => {
//     const emit = spyOn(directive.hovered, 'emit');
//     const MouseHoverEvent = {
//       modifier: { srcElement: { className: 'INT_PLUS-highlight' } },
//       negative: { srcElement: { className: 'NEGATIVE-highlight' } },
//       positive: { srcElement: { className: 'POSITIVE-highlight' } },
//       underlined: { srcElement: { className: 'underlined-text' } }
//     };
//     let eventObj: any = MouseHoverEvent.modifier;
//     highlightDebugElement.triggerEventHandler('mouseover', eventObj);
//     expect(emit).toHaveBeenCalled();
//     expect(emit).toHaveBeenCalledWith(true);

//     eventObj = MouseHoverEvent.negative;
//     highlightDebugElement.triggerEventHandler('mouseover', eventObj);
//     expect(emit).toHaveBeenCalled();
//     expect(emit).toHaveBeenCalledWith(true);

//     eventObj = MouseHoverEvent.positive;
//     highlightDebugElement.triggerEventHandler('mouseover', eventObj);
//     expect(emit).toHaveBeenCalled();
//     expect(emit).toHaveBeenCalledWith(true);

//     eventObj = MouseHoverEvent.underlined;
//     highlightDebugElement.triggerEventHandler('mouseover', eventObj);
//     expect(emit).toHaveBeenCalled();
//     expect(emit).toHaveBeenCalledWith(true);
//   });

//   it('should emit false on mouseover event on directive element if any entity element is not hovered', () => {
//     const emit = spyOn(directive.hovered, 'emit');
//     const eventObj: any = { srcElement: { className: 'other-element' } };
//     highlightDebugElement.triggerEventHandler('mouseover', eventObj);
//     expect(emit).toHaveBeenCalled();
//     expect(emit).toHaveBeenCalledWith(false);
//   });

//   describe('ngOnChanges()', () => {
//     it('should call highlightEntities method', () => {
//       const highlight = spyOn(directive, 'highlightEntities');
//       directive.ngOnChanges();
//       expect(highlight).toHaveBeenCalled();
//     });
//   });
// });

@Component({
  selector: 'app-highlight-demo',
  template: `
    <span
      class="text"
      appHighlight
      [search]="search"
      [text]="text"
      [classToApply]="'highlight'"
    ></span>
  `
})
class HighlightDemoComponent {
  text = INPUT;
}
