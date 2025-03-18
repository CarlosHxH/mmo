import {
  RpgPlayer,
  type RpgPlayerHooks,
  Control,
  Components,
} from "@rpgjs/server";

const player: RpgPlayerHooks = {
  onConnected(player: RpgPlayer) {
    player.name = "YourName";
    player.setComponentsTop<any>(
      [Components.hpBar({}, "{name} - {$percent}%\n\n{name}"),Components.text('')],
      {
        height: 15,
        width: 100,
        marginBottom: -10,
      }
    );
  },

  onInput(player: RpgPlayer, { input }) {
    if (input == Control.Back) {
      player.callMainMenu();
    }
  },
  async onJoinMap(player: RpgPlayer) {
    if (player.getVariable("AFTER_INTRO")) {
      return;
    }
    await player.showText(
      "Bem - vindo ao início dos RPGJs.Curta apresentação da estrutura:"
    );
    player.setVariable("AFTER_INTRO", true);
  },

  
};

export default player;
