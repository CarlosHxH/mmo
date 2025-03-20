import {
  RpgPlayer,
  type RpgPlayerHooks,
  Control,
  Components,
} from "@rpgjs/server";

const player: RpgPlayerHooks = {
  onConnected(player: RpgPlayer) {
    player.name = "Noname";
    player.speed = 1.5;
    player.setComponentsTop<any>(
      [
        Components.hpBar({}, 'HP: {$current}/{$max} - {name}'),
        //Components.bar('hp', 'param.maxHp', {bgColor: '#ab0606'}, 'HP: {$current}/{$max} - {name}')
      ],{
        height: 10,
        width: 100,
        marginBottom: -5,
      }
    );
  },

  onInput(player: RpgPlayer, { input }) {
    if (input == Control.Back) {
      player.callMainMenu();
    }
  },
    
  async onJoinMap(player: RpgPlayer) {
    //if (player.getVariable("AFTER_INTRO")) return;
    //await player.showText("Bem - vindo ao início dos RPGJs.Curta apresentação da estrutura:");
    //player.setVariable("AFTER_INTRO", true);
  },

  
};

export default player;
