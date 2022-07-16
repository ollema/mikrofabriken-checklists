export type SetupStepTasks = {
	id: number;
	title: string;
	desc?: string;
};

export type SetupStep = {
	id: number;
	title: string;
	desc?: string;

	setupStepTasks: { [key: number]: SetupStepTasks };
};

export type MachineType = {
	slug: string;
	title: string;
	desc?: string;

	setupSteps: { [key: number]: SetupStep };
};
