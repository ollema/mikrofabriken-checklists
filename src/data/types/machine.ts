export type SetupStepTaskType = {
	title: string;
	desc?: string;
};

export type SetupStepType = {
	title: string;
	desc?: string;

	setupStepTasks: { [key: string]: SetupStepTaskType };
};

export type MachineType = {
	slug: string;
	title: string;
	desc?: string;

	setupSteps: { [key: string]: SetupStepType };
};

export type MachinesType = { [key: string]: MachineType };
