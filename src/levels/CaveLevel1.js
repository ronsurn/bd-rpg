import {Sprite} from "../Sprite.js";
import {Vector2} from "../Vector2.js";
import {resources} from "../Resource.js";
import {Level} from "../objects/Level/Level.js";
import {gridCells} from "../helpers/grid.js";
import {Exit } from "../objects/Exit/Exit.js";
import {Hero} from "../objects/Hero/Hero.js";
import {Banana} from "../objects/Rod/Banana.js";
import {events} from "../Events.js";
import {OutdoorLevel1} from "./OutdoorLevel1.js";
import {Npc3} from "../objects/Npc/Npc3.js";
import {NpcToh} from "../objects/Npc/Npc-toh.js";
import { GET_BALL, GET_GLOVE, storyFlags, USE_REMEDY, GET_BANANA, USE_BALL, USE_GLOVE} from "../StoryFlags.js";
import { NpcNai } from "../objects/Npc/Npc-nai.js";

const DEFAULT_HERO_POSITION = new Vector2(gridCells(6), gridCells(5))

export class CaveLevel1 extends Level {
  constructor(params={}) {
    super({});

    this.background = new Sprite({
      resource: resources.images.cave,
      frameSize: new Vector2(320, 180)
    })

    const ground = new Sprite({
      resource: resources.images.caveGround,
      frameSize: new Vector2(320, 180)
    })
    this.addChild(ground)

    const exit = new Exit(gridCells(2), gridCells(4))
    this.addChild(exit);


    this.heroStartPosition = params.heroPosition ?? DEFAULT_HERO_POSITION;
    const hero = new Hero(this.heroStartPosition.x, this.heroStartPosition.y);
    this.addChild(hero);

    
    //const ball = new Ball(gridCells(9), gridCells(6))
    //this.addChild(ball)
    
 const banana = new Banana(gridCells(16), gridCells(7))
        if(storyFlags.flags.has(GET_BANANA))
      {this.removeChild(banana)}
    else {this.addChild(banana)}
 
 
    


    /*
    if(storyFlags.flags.has(TALKED_TO_D))
      {this.removeChild(ball)}
    else {this.addChild(ball)}
      */  




    /*
    const npc2 = new Npc(gridCells(8), gridCells(5), {
      content: [
        {
          string: "What a wonderful day at work in the cave!",
          requires: [],
          addsFlag: TALKED_TO_B
        }
      ],
      portraitFrame: 3
    })
    this.addChild(npc2);

    */

////////////////////////////////////////////////////////////////////////

const npc3 = new Npc3(gridCells(12), gridCells(5), {
      content: [
        
        {
          string: "Happy Birthday, For HEALTH !!",
          requires: [USE_REMEDY],
          },
        
        {
          string: "Ahh, PenPhak's glove, I'll beat that's Ghost down !!",
          requires: [GET_GLOVE],
          addsFlag: USE_GLOVE,
                  },
{

          string: "For HEALTH !! Ha Ha",
          requires: [],
        
}


      ],
      portraitFrame: 0
    })

    this.addChild(npc3);
    
    /*
    console.log(storyFlags);
    if(storyFlags.flags.has(TALKED_TO_D))
    {this.removeChild(npc3);} else {this.addChild(npc3);}
     if (storyFlags === 'TALKED_TO_D') {this.removeChild(npc3);} else {this.addChild(npc3);}
    
    */

  

/////////////////////////////////////////////////////////////////////


const npcNai = new NpcNai(gridCells(8), gridCells(1), {
      content: [
             
        {
          string: "Visit Instagram nrtech2026, you'll get your treasure",
          requires: [USE_BALL],
        },
        {
          string: "My footbal !! thank you !! .. Listen, I'll tell you a secret ....",
          requires: [GET_BALL],
         // bypass: [GET_BALL],
          addsFlag: USE_BALL,
        },
        {
          string: "Sis, I'm looking for my football, do you see it?",
          requires: [],
        }
      ],
      portraitFrame: 2
    })
   this.addChild(npcNai);
   
   ////////////////////////////////////////////////////////


const npcToh = new NpcToh(gridCells(5), gridCells(1), {
      content: [
             
        {
          string: "Zzz zzz",
          requires: [],
        }
      ],
      portraitFrame: 6
    })
   this.addChild(npcToh);


////////////////////////////////////////////////////////////////////

    this.walls = new Set();

// Cupboard
this.walls.add(`32,0`);
this.walls.add(`48,0`);
this.walls.add(`32,16`);
this.walls.add(`48,16`);

this.walls.add(`64,0`);
this.walls.add(`80,16`);
this.walls.add(`96,16`);

this.walls.add(`112,0`);

//Left Wall
this.walls.add(`16,16`);
this.walls.add(`16,32`);
this.walls.add(`16,48`);
this.walls.add(`16,64`);
this.walls.add(`16,80`);
this.walls.add(`16,96`);
this.walls.add(`16,112`);
this.walls.add(`16,128`);

//Stair Wall 1
this.walls.add(`16,48`);
this.walls.add(`32,48`);
this.walls.add(`48,48`);
this.walls.add(`64,48`);
this.walls.add(`80,48`);
this.walls.add(`96,48`);

this.walls.add(`128,48`);
this.walls.add(`144,48`);
this.walls.add(`160,48`);
this.walls.add(`160,32`);
this.walls.add(`160,16`);
this.walls.add(`144,16`);

//Stair Wall 2
this.walls.add(`16,80`);
this.walls.add(`32,80`);
this.walls.add(`48,80`);
this.walls.add(`64,80`);
this.walls.add(`80,80`);
this.walls.add(`96,80`);



//Bottom Wall

this.walls.add(`32,128`);
this.walls.add(`48,128`);
this.walls.add(`64,128`);
this.walls.add(`80,128`);
this.walls.add(`96,128`);
this.walls.add(`112,128`);
this.walls.add(`128,128`);
this.walls.add(`144,128`);
this.walls.add(`160,128`);
this.walls.add(`176,128`);
this.walls.add(`192,128`);
this.walls.add(`208,128`);
this.walls.add(`224,128`);
this.walls.add(`240,128`);
this.walls.add(`256,128`);
this.walls.add(`272,128`);




//Top Wall

this.walls.add(`272,0`);
this.walls.add(`272,16`);
this.walls.add(`272,48`);
this.walls.add(`256,0`);
this.walls.add(`240,0`);
this.walls.add(`240,16`);
this.walls.add(`240,32`);
this.walls.add(`240,48`);

this.walls.add(`224,0`);
this.walls.add(`208,0`);
this.walls.add(`192,0`);
this.walls.add(`176,0`);
this.walls.add(`176,16`);
this.walls.add(`176,32`);

//Right Wall

this.walls.add(`288,0`);
this.walls.add(`288,16`);
this.walls.add(`288,32`);
this.walls.add(`288,48`);
this.walls.add(`288,64`);
this.walls.add(`288,80`);
this.walls.add(`288,96`);
this.walls.add(`288,112`);
  }

  ready() {
    events.on("HERO_EXITS", this, () => {
      events.emit("CHANGE_LEVEL", new OutdoorLevel1({
        heroPosition: new Vector2(gridCells(6), gridCells(4))
      }))
    })
  }

}