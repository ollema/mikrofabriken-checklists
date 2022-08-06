import type { MachineType } from '$lib/data/types/machines';

export const laser: MachineType = {
	title: 'Laser cutter',
	setupSteps: {
		firstStep: {
			title: 'First setup step',
			desc: 'First setup step for this machine',
			done: { default: false },
			tasks: {
				firstSubTask: {
					title: 'First setup task for the first step',
					desc: 'First setup task for the first step for this machine',
					done: { default: false }
				},
				secondSubTask: {
					title: 'Second setup task for the first step',
					desc: 'Second setup task for the first step for this machine',
					done: { default: false }
				},
				thirdSubTask: {
					title: 'Third setup task for the first step',
					desc: 'Third setup task for the first step for this machine',
					done: { default: false }
				},
				fourthSubTask: {
					title: 'Fourth setup task for the first step',
					desc: 'Fourth setup task for the first step for this machine',
					done: { default: false }
				}
			}
		},
		secondStep: {
			title: 'Second setup step',
			desc: 'Second setup step for this machine',
			done: { default: false },
			tasks: {
				firstSubTask: {
					title: 'First setup task for the second step',
					desc: 'First setup task for the second step for this machine',
					done: { default: false }
				},
				secondSubTask: {
					title: 'Second setup task for the second step',
					desc: 'Second setup task for the second step for this machine',
					done: { default: false }
				},
				thirdSubTask: {
					title: 'Third setup task for the second step',
					desc: 'Third setup task for the second step for this machine',
					done: { default: false }
				},
				fourthSubTask: {
					title: 'Fourth setup task for the second step',
					desc: 'Fourth setup task for the second step for this machine',
					done: { default: false }
				}
			}
		},
		thirdStep: {
			title: 'Third setup step',
			desc: 'Third setup step for this machine',
			done: { default: false },
			tasks: {
				firstSubTask: {
					title: 'First setup task for the third step',
					desc: 'First setup task for the third step for this machine',
					done: { default: false }
				},
				secondSubTask: {
					title: 'Second setup task for the third step',
					desc: 'Second setup task for the third step for this machine',
					done: { default: false }
				},
				thirdSubTask: {
					title: 'Third setup task for the third step',
					desc: 'Third setup task for the third step for this machine',
					done: { default: false }
				},
				fourthSubTask: {
					title: 'Fourth setup task for the third step',
					desc: 'Fourth setup task for the third step for this machine',
					done: { default: false }
				}
			}
		},
		fourthStep: {
			title: 'Fourth setup step',
			desc: 'Fourth setup step for this machine',
			done: { default: false },
			tasks: {
				firstSubTask: {
					title: 'First setup task for the fourth step',
					desc: 'First setup task for the fourth step for this machine',
					done: { default: false }
				},
				secondSubTask: {
					title: 'Second setup task for the fourth step',
					desc: 'Second setup task for the fourth step for this machine',
					done: { default: false }
				},
				thirdSubTask: {
					title: 'Third setup task for the fourth step',
					desc: 'Third setup task for the fourth step for this machine',
					done: { default: false }
				}
			}
		},
		fifthStep: {
			title: 'Fifth setup step',
			desc: 'Fifth setup step for this machine',
			done: { default: false },
			tasks: {
				firstSubTask: {
					title: 'First setup task for the fifth step',
					desc: 'First setup task for the fifth step for this machine',
					done: { default: false }
				},
				secondSubTask: {
					title: 'Second setup task for the fifth step',
					desc: 'Second setup task for the fifth step for this machine',
					done: { default: false }
				},
				thirdSubTask: {
					title: 'Third setup task for the fifth step',
					desc: 'Third setup task for the fifth step for this machine',
					done: { default: false }
				},
				fourthSubTask: {
					title: 'Fourth setup task for the fifth step',
					desc: 'Fourth setup task for the fifth step for this machine',
					done: { default: false }
				}
			}
		},
		sixthStep: {
			title: 'Sixth setup step',
			desc: 'Sixth setup step for this machine',
			done: { default: false },
			tasks: {
				firstSubTask: {
					title: 'First setup task for the sixth step',
					desc: 'First setup task for the sixth step for this machine',
					done: { default: false }
				},
				secondSubTask: {
					title: 'Second setup task for the sixth step',
					desc: 'Second setup task for the sixth step for this machine',
					done: { default: false }
				},
				thirdSubTask: {
					title: 'Third setup task for the sixth step',
					desc: 'Third setup task for the sixth step for this machine',
					done: { default: false }
				}
			}
		}
	}
};
