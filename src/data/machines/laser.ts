import type { MachineType } from '../types/machines';

export const laser: MachineType = {
	slug: 'laser',
	title: 'Laser cutter',
	setupSteps: {
		firstStep: {
			title: 'First setup task',
			desc: 'First setup task for this machine',
			setupStepTasks: {
				firstSubTask: {
					title: 'First setup task step for the first task',
					desc: 'First setup task step for the first task for this machine'
				},
				secondSubTask: {
					title: 'Second setup task step for the first task',
					desc: 'Second setup task step for the first task for this machine'
				},
				thirdSubTask: {
					title: 'Third setup task step for the first task',
					desc: 'Third setup task step for the first task for this machine'
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the first task',
					desc: 'Fourth setup task step for the first task for this machine'
				}
			}
		},
		secondStep: {
			title: 'Second setup task',
			desc: 'Second setup task for this machine',
			setupStepTasks: {
				firstSubTask: {
					title: 'First setup task step for the second task',
					desc: 'First setup task step for the second task for this machine'
				},
				secondSubTask: {
					title: 'Second setup task step for the second task',
					desc: 'Second setup task step for the second task for this machine'
				},
				thirdSubTask: {
					title: 'Third setup task step for the second task',
					desc: 'Third setup task step for the second task for this machine'
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the second task',
					desc: 'Fourth setup task step for the second task for this machine'
				}
			}
		},
		thirdStep: {
			title: 'Third setup task',
			desc: 'Third setup task for this machine',
			setupStepTasks: {
				firstSubTask: {
					title: 'First setup task step for the third task',
					desc: 'First setup task step for the third task for this machine'
				},
				secondSubTask: {
					title: 'Second setup task step for the third task',
					desc: 'Second setup task step for the third task for this machine'
				},
				thirdSubTask: {
					title: 'Third setup task step for the third task',
					desc: 'Third setup task step for the third task for this machine'
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the third task',
					desc: 'Fourth setup task step for the third task for this machine'
				}
			}
		},
		fourthStep: {
			title: 'Fourth setup task',
			desc: 'Fourth setup task for this machine',
			setupStepTasks: {
				firstSubTask: {
					title: 'First setup task step for the fourth task',
					desc: 'First setup task step for the fourth task for this machine'
				},
				secondSubTask: {
					title: 'Second setup task step for the fourth task',
					desc: 'Second setup task step for the fourth task for this machine'
				},
				thirdSubTask: {
					title: 'Third setup task step for the fourth task',
					desc: 'Third setup task step for the fourth task for this machine'
				}
			}
		},
		fifthStep: {
			title: 'Fifth setup task',
			desc: 'Fifth setup task for this machine',
			setupStepTasks: {
				firstSubTask: {
					title: 'First setup task step for the fifth task',
					desc: 'First setup task step for the fifth task for this machine'
				},
				secondSubTask: {
					title: 'Second setup task step for the fifth task',
					desc: 'Second setup task step for the fifth task for this machine'
				},
				thirdSubTask: {
					title: 'Third setup task step for the fifth task',
					desc: 'Third setup task step for the fifth task for this machine'
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the fifth task',
					desc: 'Fourth setup task step for the fifth task for this machine'
				}
			}
		},
		sixthStep: {
			title: 'Sixth setup task',
			desc: 'Sixth setup task for this machine',

			setupStepTasks: {
				firstSubTask: {
					title: 'First setup task step for the sixth task',
					desc: 'First setup task step for the sixth task for this machine'
				},
				secondSubTask: {
					title: 'Second setup task step for the sixth task',
					desc: 'Second setup task step for the sixth task for this machine'
				},
				thirdSubTask: {
					title: 'Third setup task step for the sixth task',
					desc: 'Third setup task step for the sixth task for this machine'
				}
			}
		}
	}
};
