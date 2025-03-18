import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import Potion from '../database/potion';

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Você me robou 10 ouro.', {
            talkWith: this
        })
        player.gold += 10

        const choice = await player.showChoices('Do you whant save your progress?', [
            { text: 'Yes', value: true },
            { text: 'No', value: false }
        ])
        if (choice && choice.value) {
            player.getItem('potion');
        }
    }
} 