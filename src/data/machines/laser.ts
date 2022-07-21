import type { MachineType } from '$data/types/machines';
import { Status } from '$data/types/machines';

export const laser: MachineType = {
	title: 'Laser cutter',
	setupSteps: {
		firstStep: {
			title: 'First setup task',
			desc: 'First setup task for this machine',
			status: { default: Status.Todo },
			tasks: {
				firstSubTask: {
					title: 'First setup task step for the first task',
					desc: 'First setup task step for the first task for this machine',
					status: { default: Status.Todo }
				},
				secondSubTask: {
					title: 'Second setup task step for the first task',
					desc: 'Second setup task step for the first task for this machine',
					status: { default: Status.Todo }
				},
				thirdSubTask: {
					title: 'Third setup task step for the first task',
					desc: 'Third setup task step for the first task for this machine',
					status: { default: Status.Todo }
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the first task',
					desc: 'Fourth setup task step for the first task for this machine',
					status: { default: Status.Todo }
				}
			}
		},
		secondStep: {
			title: 'Second setup task',
			desc: 'Second setup task for this machine',
			status: { default: Status.Todo },
			tasks: {
				firstSubTask: {
					title: 'First setup task step for the second task',
					desc: 'First setup task step for the second task for this machine',
					status: { default: Status.Todo }
				},
				secondSubTask: {
					title: 'Second setup task step for the second task',
					desc: 'Second setup task step for the second task for this machine',
					status: { default: Status.Todo }
				},
				thirdSubTask: {
					title: 'Third setup task step for the second task',
					desc: 'Third setup task step for the second task for this machine',
					status: { default: Status.Todo }
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the second task',
					desc: 'Fourth setup task step for the second task for this machine',
					status: { default: Status.Todo }
				}
			}
		},
		thirdStep: {
			title: 'Third setup task',
			desc: 'Third setup task for this machine',
			status: { default: Status.Todo },
			tasks: {
				firstSubTask: {
					title: 'First setup task step for the third task',
					desc: 'First setup task step for the third task for this machine',
					status: { default: Status.Todo }
				},
				secondSubTask: {
					title: 'Second setup task step for the third task',
					desc: 'Second setup task step for the third task for this machine',
					status: { default: Status.Todo }
				},
				thirdSubTask: {
					title: 'Third setup task step for the third task',
					desc: 'Third setup task step for the third task for this machine',
					status: { default: Status.Todo }
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the third task',
					desc: 'Fourth setup task step for the third task for this machine',
					status: { default: Status.Todo }
				}
			}
		},
		fourthStep: {
			title: 'Fourth setup task',
			desc: 'Fourth setup task for this machine',
			status: { default: Status.Todo },
			tasks: {
				firstSubTask: {
					title: 'First setup task step for the fourth task',
					desc: 'First setup task step for the fourth task for this machine',
					status: { default: Status.Todo }
				},
				secondSubTask: {
					title: 'Second setup task step for the fourth task',
					desc: 'Second setup task step for the fourth task for this machine',
					status: { default: Status.Todo }
				},
				thirdSubTask: {
					title: 'Third setup task step for the fourth task',
					desc: 'Third setup task step for the fourth task for this machine',
					status: { default: Status.Todo }
				}
			}
		},
		fifthStep: {
			title: 'Fifth setup task',
			desc: 'Fifth setup task for this machine',
			status: { default: Status.Todo },
			tasks: {
				firstSubTask: {
					title: 'First setup task step for the fifth task',
					desc: 'First setup task step for the fifth task for this machine',
					status: { default: Status.Todo }
				},
				secondSubTask: {
					title: 'Second setup task step for the fifth task',
					desc: 'Second setup task step for the fifth task for this machine',
					status: { default: Status.Todo }
				},
				thirdSubTask: {
					title: 'Third setup task step for the fifth task',
					desc: 'Third setup task step for the fifth task for this machine',
					status: { default: Status.Todo }
				},
				fourthSubTask: {
					title: 'Fourth setup task step for the fifth task',
					desc: 'Fourth setup task step for the fifth task for this machine',
					status: { default: Status.Todo }
				}
			}
		},
		sixthStep: {
			title: 'Sixth setup task',
			desc: 'Sixth setup task for this machine',
			status: { default: Status.Todo },
			tasks: {
				firstSubTask: {
					title: 'First setup task step for the sixth task',
					desc: 'First setup task step for the sixth task for this machine',
					status: { default: Status.Todo }
				},
				secondSubTask: {
					title: 'Second setup task step for the sixth task',
					desc: 'Second setup task step for the sixth task for this machine',
					status: { default: Status.Todo }
				},
				thirdSubTask: {
					title: 'Third setup task step for the sixth task',
					desc: 'Third setup task step for the sixth task for this machine',
					status: { default: Status.Todo }
				}
			}
		}
	}
};
