import { Item } from '@rpgjs/database'

@Item({
    id: 'potion',
    name: 'Potion',
    description: 'Gives 100 HP',
    price: 200,
    hpValue: 100
})
export default class Potion { }