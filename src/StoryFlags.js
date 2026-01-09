class StoryFlags {
  constructor() {
    this.flags = new Map();
  }

  add(flag) {
    this.flags.set(flag, true);
  }

  getRelevantScenario(scenarios=[]) {

    return scenarios.find(scenario => {

      // Disqualify when any bypass flags are present
      const bypassFlags = scenario.bypass ?? [];
      for (let i=0; i<bypassFlags.length; i++) {
        const thisFlag = bypassFlags[i];
        if (this.flags.has(thisFlag)) {
          return false;
        }
      }

      // Disqualify if we find a missing required flag
      const requiredFlags = scenario.requires ?? [];
      for (let i=0; i<requiredFlags.length; i++) {
        const thisFlag = requiredFlags[i];
        if (!this.flags.has(thisFlag)) {
          return false;
        }
      }

      // If we made it this far, this scenario is relevant
      return true;
    });
  }


}

export const TALKED_TO_A = 'TALKED_TO_A';
export const TALKED_TO_B = 'TALKED_TO_B';

export const TALKED_TO_C = 'TALKED_TO_C';
export const TALKED_TO_D = 'TALKED_TO_D';

export const GET_MELON = 'GET_MELON';
export const GET_GLOVE = 'GET_GLOVE';
export const GET_BALL = 'GET_BALL';
export const GET_REMEDY = 'GET_REMEDY';
export const GET_BANANA = 'GET_BANANA';

export const USE_MELON = 'USE_MELON';
export const USE_GLOVE = 'USE_GLOVE';
export const USE_BALL = 'USE_BALL';
export const USE_REMEDY = 'USE_REMEDY';
export const USE_BANANA = 'USE_BANANA';


export const storyFlags = new StoryFlags();