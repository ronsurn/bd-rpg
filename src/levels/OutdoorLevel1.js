import {Level} from "../objects/Level/Level.js";
import {Sprite} from "../Sprite.js";
import {resources} from "../Resource.js";
import {Vector2} from "../Vector2.js";
import {Exit} from "../objects/Exit/Exit.js";
import {gridCells} from "../helpers/grid.js";
import {Hero} from "../objects/Hero/Hero.js";
import {Rod} from "../objects/Rod/Rod.js";
import {events} from "../Events.js";
import {CaveLevel1} from "./CaveLevel1.js";
import {NpcMaa} from "../objects/Npc/Npc-maa.js";
import {NpcGhost} from "../objects/Npc/NPC-ghost.js";
import {storyFlags,GET_MELON, USE_MELON, GET_GLOVE, USE_GLOVE, GET_BALL,USE_BALL,GET_REMEDY, USE_REMEDY, GET_BANANA,USE_BANANA } from "../StoryFlags.js";
import {Npc} from "../objects/Npc/Npc.js";
import {NpcMonkey} from "../objects/Npc/Npc-monkey.js";
import {Ball} from "../objects/Rod/Ball.js";
import {Melon} from "../objects/Rod/Melon.js";
import {Glove} from "../objects/Rod/Glove.js";

const DEFAULT_HERO_POSITION = new Vector2(gridCells(6),gridCells(5))

export class OutdoorLevel1 extends Level {
  constructor(params={}) {
    super({});
    this.background = new Sprite({
      resource: resources.images.sky,
      frameSize: new Vector2(320, 180)
    })

    const groundSprite = new Sprite({
      resource: resources.images.ground,
      frameSize: new Vector2(320, 180)
    })
    this.addChild(groundSprite);

    const exit = new Exit(gridCells(6), gridCells(3))
    this.addChild(exit);

    this.heroStartPosition = params.heroPosition ?? DEFAULT_HERO_POSITION;
    const hero = new Hero(this.heroStartPosition.x, this.heroStartPosition.y)
    this.addChild(hero);

   


////////////////////////////////////////////////////////////////////////

const npcMaa = new NpcMaa(gridCells(11), gridCells(3), {
      content: [
          
         {
          string: "Hon, Thank you for taking care of Jon, Happy Birthday",
          requires: [USE_REMEDY],
        },
        {
          string: "Sweety!, thanks for the water, BTW, Paa can wipe out your ghost issue",
          requires: [GET_MELON],
          //addsFlag: USE_MELON,
                            },
        {
          string: "Hon, could you take a look at Jon, He's seem not very well, ... it is a hot day, even i feel thirsty",
          requires: [],
                  }

      ],
      portraitFrame: 1
    })
    this.addChild(npcMaa);

/////////////////////////////////////////////////////////////////////


const npcMonkey = new NpcMonkey(gridCells(2), gridCells(9), {
      content: [
          
        
        {
          string: "Meloon ! !! Tank-Koo .... I leave after FinNid Meloon ",
          requires: [GET_BANANA],
          addsFlag: USE_BANANA,
                            },
        {
          string: "Ooo, Ooo, Hun-Gri  ...  Ooo  Ooo",
          requires: [],
                  }

      ],
      portraitFrame: 5
    })
    
       if(storyFlags.flags.has(USE_BANANA))
    {this.removeChild(npcMonkey);} else {this.addChild(npcMonkey);}
    
    //this.addChild(npcMonkey);




/////////////////////////////////////////////////////////////////////


    const npc1 = new Npc(gridCells(3), gridCells(3), {
      //content: "I am the first NPC!",
      content: [
        {
          string: "See your birthday Gift !! .... youtube.com watch?v=WxAAAFJF8gs",
          requires: [USE_REMEDY],
        },
        {
          string: "Thank you for the Remedy !!! , NiNah, I'm good now .... and ....",
          requires: [GET_REMEDY],
          //bypass: [GET_REMEDY],
          addsFlag: USE_REMEDY,
        },
        {
          string: "Ni-Nah, I'm feel unwell, gimme Remedy",
          requires: [],
        }
      ],
      portraitFrame: 3
    })
    this.addChild(npc1);


/////////////////////////////////////////////////////////////////////


    const ghost = new NpcGhost(gridCells(11), gridCells(8), {
      
      content: [
        
        {
          string: "Heh Heh ... You shall not pass",
          requires: [],
        }
      ],
      portraitFrame: 4
    })

    if(storyFlags.flags.has(USE_GLOVE))
    {this.removeChild(ghost)} else {this.addChild(ghost)}






/////////////////////////////////////////////////////////////////////

const ball = new Ball(gridCells(11), gridCells(10))
//this.addChild(ball)

if(storyFlags.flags.has(GET_BALL))
      {this.removeChild(ball)}
    else {this.addChild(ball)}

  
            const glove = new Glove(gridCells(1), gridCells(9))
if(storyFlags.flags.has(GET_GLOVE))
      {this.removeChild(glove)}
    else {this.addChild(glove)}


const melon = new Melon(gridCells(19), gridCells(9))    
if(storyFlags.flags.has(GET_MELON))
      {this.removeChild(melon)}
    else {this.addChild(melon)}


 const rod = new Rod(gridCells(19), gridCells(3))
 if(storyFlags.flags.has(GET_REMEDY))
      {this.removeChild(rod)}
    else {this.addChild(rod)}   
 
 

/*

            const melon = new Melon(gridCells(19), gridCells(9))
    this.addChild(melon)

*/


    this.walls = new Set();
    
    // Upper Wall
    this.walls.add(`16,0`); 
    this.walls.add(`32,0`);
this.walls.add(`48,0`);
this.walls.add(`64,0`);
this.walls.add(`80,0`);
this.walls.add(`96,0`);
this.walls.add(`112,0`);
this.walls.add(`128,0`);
this.walls.add(`144,0`);
//this.walls.add(`160,0`);
this.walls.add(`176,0`);
this.walls.add(`192,0`);
this.walls.add(`208,0`);
this.walls.add(`224,0`);
this.walls.add(`240,0`);
this.walls.add(`256,0`);
this.walls.add(`272,0`);
this.walls.add(`288,0`);


// Trees
this.walls.add(`272,16`);
this.walls.add(`272,32`);
this.walls.add(`288,48`);
this.walls.add(`304,16`);
this.walls.add(`304,32`);
this.walls.add(`304,64`);
this.walls.add(`304,80`);
this.walls.add(`304,96`);
this.walls.add(`304,112`);
this.walls.add(`304,128`);
this.walls.add(`320,144`);
this.walls.add(`304,160`);


// Island Tree

this.walls.add(`192,128`);
this.walls.add(`192,144`);
this.walls.add(`192,160`);

this.walls.add(`208,128`);
this.walls.add(`224,128`);
this.walls.add(`224,144`);

this.walls.add(`240,160`);
this.walls.add(`256,160`);
this.walls.add(`272,160`);
this.walls.add(`288,160`);

this.walls.add(`128,160`);


// Bridge

this.walls.add(`144,128`);
this.walls.add(`128,128`);
this.walls.add(`128,144`);
this.walls.add(`128,160`);

this.walls.add(`176,176`);


this.walls.add(`96,128`);

this.walls.add(`160,128`);
this.walls.add(`160,144`);
this.walls.add(`160,160`);



// Left Wall
this.walls.add(`0,16`);
this.walls.add(`0,32`);
this.walls.add(`0,48`);
this.walls.add(`0,64`);
this.walls.add(`0,80`);
this.walls.add(`0,96`);
this.walls.add(`0,112`);
this.walls.add(`0,128`);
this.walls.add(`16,128`);
this.walls.add(`0,144`);

// Bottom Left
this.walls.add(`16,160`);
this.walls.add(`32,160`);
this.walls.add(`48,160`);
this.walls.add(`64,160`);
this.walls.add(`80,160`);
this.walls.add(`96,160`);
this.walls.add(`112,176`);

//Tree Alone
this.walls.add(`64,112`);

//Maa Hill
this.walls.add(`160,64`);
this.walls.add(`192,64`);
this.walls.add(`192,80`);
  }



  ready() {
    events.on("HERO_EXITS", this, () => {
      events.emit("CHANGE_LEVEL", new CaveLevel1({
        heroPosition: new Vector2(gridCells(3), gridCells(4))
      }))
    })
  }


}