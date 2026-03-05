import {GameObject} from "../../GameObject.js";
import {Vector2} from "../../Vector2.js";
import {Sprite} from "../../Sprite.js";
import {resources} from "../../Resource.js";
import {events} from "../../Events.js";




export class Exit extends GameObject {
  constructor(x, y) {
    super({
      position: new Vector2(x,y)
    });
    this.addChild(new Sprite({
      resource: resources.images.exit
    }))

    this.drawLayer = "FLOOR";
  }

ready() {

  this.hasExited = false;

  events.on("HERO_POSITION", this, pos => {

    if (this.hasExited) return;

    const roundedHeroX = Math.round(pos.x);
    const roundedHeroY = Math.round(pos.y);

    if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {

      this.hasExited = true;
      console.log("Exit triggered");
      events.emit("HERO_EXITS");

    }

  });

}


/*
ready2() {
  events.on("HERO_POSITION", this, pos => {

    const roundedHeroX = Math.round(pos.x);
    const roundedHeroY = Math.round(pos.y);

    if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {
      events.emit("HERO_FART")
    }

  })
}

*/




}