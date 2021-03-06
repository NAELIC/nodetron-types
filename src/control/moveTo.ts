import { AbstractPoint } from '@nodetron/math/point2D'

import { Kick } from '../enum'

export interface MoveToMessage {
    id: number,
    target: AbstractPoint,
    orientation: number,
    spin: boolean,
    power: number,
    kick: Kick,
}
