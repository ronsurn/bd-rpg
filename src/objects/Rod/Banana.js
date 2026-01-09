import {GameObject} from "../../GameObject.js";
import {Vector2} from "../../Vector2.js";
import {Sprite} from "../../Sprite.js";
import {resources} from "../../Resource.js";
import {events} from "../../Events.js";
import {GET_BANANA, storyFlags} from "../../StoryFlags.js";

import getSound from "../sound/get-item.mp3";

const getRod = new Audio(getSound)


export class Banana extends GameObject {
  constructor(x,y) {
    super({
      name: "Banana",
      position: new Vector2(x,y)
    });
    const sprite = new Sprite({
      resource: resources.images.banana,
      position: new Vector2(0, -5) // nudge upwards visually
    })
    this.addChild(sprite);

  }

  ready() {
    events.on("HERO_POSITION", this, pos => {
      // detect overlap...
      const roundedHeroX = Math.round(pos.x);
      const roundedHeroY = Math.round(pos.y);
      if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {
        this.onCollideWithHero();
      }
    })
  }

  onCollideWithHero() {
    // Remove this instance from the scene
    this.destroy();


    // Alert other things that we picked up a rod
    events.emit("HERO_PICKS_UP_ITEM5", {
      type: "BANANA",
      image: resources.images.banana,
      position: this.position
    })
  storyFlags.add(GET_BANANA);


getRod.play();
  }




}