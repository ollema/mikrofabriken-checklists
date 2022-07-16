import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

import type { MachinesType, MachineType } from '../models/machine';
import { laser } from './data/laser';

let m: MachinesType = [laser];

export const machines = writable(m);
