import { Component, OnInit } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';

declare function loadImages(): any;

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  const __ = ref.selectorsOf(STYLES);
  return {
    $global: lyl `{
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
    root: lyl `{
      display: block,
      width: '100%',
      maxWidth: '360px'
    }`
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StyleRenderer]
})
export class AppComponent implements OnInit {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);

  public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Snake_River_%285mb%29.jpg/2560px-Snake_River_%285mb%29.jpg';
  mode = 'side';
  hasBackdrop: boolean | null = null;

  title = 'angular-learning-guide';
  
  public alertType: string = 'success';
  public array = [
    { "id": 1, "name": "bill" },
    { "id": 2, "name": "bob" },
    { "id": 3, "name": "billy" }
  ]

  foo() {
      this.array = [
          { "id": 1, "name": "foo" },
          { "id": 2, "name": "bob" },
          { "id": 3, "name": "billy" }
      ]
  }

  identify(index:any, item:any) {
      return item.id;
  }

  constructor(readonly sRenderer: StyleRenderer) {  }
  ngOnInit(): void {
    loadImages();
  }

  public setAlertType(alertType:string) {
    this.alertType = alertType;
  }


}
