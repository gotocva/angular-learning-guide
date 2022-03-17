import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** Import animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


// Gestures
import {
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';
/** Import Alyle UI */
import {
  LyTheme2,
  StyleRenderer,
  LY_THEME,
  LY_THEME_NAME,
  LyHammerGestureConfig, LyThemeModule
} from '@alyle/ui';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

/** Import the Ly component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyCommonModule } from '@alyle/ui';
import { LyCardModule } from '@alyle/ui/card';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyIconModule } from '@alyle/ui/icon';
import { LyOverlayModule } from '@alyle/ui';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyListModule } from '@alyle/ui/list';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
const LyCompononetModules = [
  LyCommonModule,
  LyButtonModule,
  LyToolbarModule,
  LyImageCropperModule,
  LyCardModule,
  LyTypographyModule,
  LyIconModule,
  LyOverlayModule,
  LyDrawerModule,
  LyRadioModule,
  LyListModule,
  LyAvatarModule,
  LyFieldModule,
  LyGridModule,
]

/** Import the ngx-bootstrap component modules */
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SpkImageComponent } from './spk-image/spk-image.component';
import { SparkImgLoaderDirective } from './spark-img-loader.directive';

const bootstrapImports = [
  AlertModule.forRoot(),
  BsDropdownModule.forRoot(),
]

@NgModule({
  declarations: [
    AppComponent,
    SpkImageComponent,
    SparkImgLoaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Gestures
    HammerModule,
    ...bootstrapImports,
    ...LyCompononetModules,
  ],
  providers: [
    [ LyTheme2 ],
    [ StyleRenderer ],
    // Theme that will be applied to this module
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
    // Gestures
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }, StyleRenderer, LyTheme2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
