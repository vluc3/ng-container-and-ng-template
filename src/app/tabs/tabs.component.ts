import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TabDirective1, TabDirective2 } from './tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  index = 0;

  @ContentChild(TabDirective1, { read: TemplateRef })
  template1: TemplateRef<any>;

  @ContentChild(TabDirective2, { read: TemplateRef })
  template2: TemplateRef<any>;
}
