import {GameObject} from "./GameObject.js";
import {events} from "./Events.js";

export class SoundTrigger extends GameObject {

  constructor(x, y, sound) {
    super({});
    this.tileX = x;
    this.tileY = y;
    this.sound = sound;
  }

  ready() {

    events.on("HERO_POSITION", this, pos => {

      const heroX = Math.round(pos.x / 16);
      const heroY = Math.round(pos.y / 16);

      if (heroX === this.tileX && heroY === this.tileY) {
        this.sound.play();
      }

    });

  }

}