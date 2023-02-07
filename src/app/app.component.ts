import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import "@google/model-viewer";

@Component({
  selector: "app-root",
  template: `<main>
    <model-viewer
      alt=""
      src="/assets/NeilArmstrong.glb"
      environment-image="/assets/moon_1k.hdr"
      poster="/assets/NeilArmstrong.webp"
      shadow-intensity="1"
      camera-controls
      touch-action="pan-y"
      generate-schema
    ></model-viewer>
  </main>`,
  styles: [],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
