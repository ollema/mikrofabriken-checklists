import type { MachineType } from '../models/machine';

export const machines: { [key: string]: MachineType } = {
	laser: {
		slug: 'laser',
		title: 'Laser cutter',
		setupSteps: {
			10: {
				id: 10,
				title: 'First setup task',
				desc: 'First setup task for this machine',
				setupStepTasks: {
					10: {
						id: 10,
						title: 'First setup task step for the first task',
						desc: 'First setup task step for the first task for this machine'
					},
					20: {
						id: 20,
						title: 'Second setup task step for the first task',
						desc: 'Second setup task step for the first task for this machine'
					},
					30: {
						id: 30,
						title: 'Third setup task step for the first task',
						desc: 'Third setup task step for the first task for this machine'
					},
					40: {
						id: 40,
						title: 'Fourth setup task step for the first task',
						desc: 'Fourth setup task step for the first task for this machine'
					}
				}
			},
			20: {
				id: 20,
				title: 'Second setup task',
				desc: 'Second setup task for this machine',
				setupStepTasks: {
					10: {
						id: 10,
						title: 'First setup task step for the second task',
						desc: 'First setup task step for the second task for this machine'
					},
					20: {
						id: 20,
						title: 'Second setup task step for the second task',
						desc: 'Second setup task step for the second task for this machine'
					},
					30: {
						id: 30,
						title: 'Third setup task step for the second task',
						desc: 'Third setup task step for the second task for this machine'
					},
					40: {
						id: 40,
						title: 'Fourth setup task step for the second task',
						desc: 'Fourth setup task step for the second task for this machine'
					}
				}
			},
			30: {
				id: 30,
				title: 'Third setup task',
				desc: 'Third setup task for this machine',
				setupStepTasks: {
					10: {
						id: 10,
						title: 'First setup task step for the third task',
						desc: 'First setup task step for the third task for this machine'
					},
					20: {
						id: 20,
						title: 'Second setup task step for the third task',
						desc: 'Second setup task step for the third task for this machine'
					},
					30: {
						id: 30,
						title: 'Third setup task step for the third task',
						desc: 'Third setup task step for the third task for this machine'
					},
					40: {
						id: 40,
						title: 'Fourth setup task step for the third task',
						desc: 'Fourth setup task step for the third task for this machine'
					}
				}
			},
			40: {
				id: 40,
				title: 'Fourth setup task',
				desc: 'Fourth setup task for this machine',
				setupStepTasks: {
					10: {
						id: 10,
						title: 'First setup task step for the fourth task',
						desc: 'First setup task step for the fourth task for this machine'
					},
					20: {
						id: 20,
						title: 'Second setup task step for the fourth task',
						desc: 'Second setup task step for the fourth task for this machine'
					},
					30: {
						id: 30,
						title: 'Third setup task step for the fourth task',
						desc: 'Third setup task step for the fourth task for this machine'
					}
				}
			},
			50: {
				id: 50,
				title: 'Fifth setup task',
				desc: 'Fifth setup task for this machine',
				setupStepTasks: {
					10: {
						id: 10,
						title: 'First setup task step for the fifth task',
						desc: 'First setup task step for the fifth task for this machine'
					},
					20: {
						id: 20,
						title: 'Second setup task step for the fifth task',
						desc: 'Second setup task step for the fifth task for this machine'
					},
					30: {
						id: 30,
						title: 'Third setup task step for the fifth task',
						desc: 'Third setup task step for the fifth task for this machine'
					},
					40: {
						id: 40,
						title: 'Fourth setup task step for the fifth task',
						desc: 'Fourth setup task step for the fifth task for this machine'
					}
				}
			},
			60: {
				id: 60,
				title: 'Sixth setup task',
				desc: 'Sixth setup task for this machine',

				setupStepTasks: {
					10: {
						id: 10,
						title: 'First setup task step for the sixth task',
						desc: 'First setup task step for the sixth task for this machine'
					},
					20: {
						id: 20,
						title: 'Second setup task step for the sixth task',
						desc: 'Second setup task step for the sixth task for this machine'
					},
					30: {
						id: 30,
						title: 'Third setup task step for the sixth task',
						desc: 'Third setup task step for the sixth task for this machine'
					}
				}
			}
		}
	}
};
