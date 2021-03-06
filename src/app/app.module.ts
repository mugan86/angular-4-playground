import { BrowserModule , } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { KeyboardsEventsModule } from 'ng-2-4keyboard-events';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

//Custom libraries
import { HelloLibraryModule, SampleModule } from 'angular-2-test-library';
import { UtilitiesModule } from 'ng-2-4-utilities';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, 'https://raw.githubusercontent.com/mugan86/angular-4-playground/master/src/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    KeyboardsEventsModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
    HelloLibraryModule,
    SampleModule,
    UtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }
