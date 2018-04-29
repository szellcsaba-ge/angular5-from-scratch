import { NgModule, Component }    from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  template: 'hello {{ title }}'
})
export class AppComponent {
  title = 'world';
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    BrowserModule,
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));

