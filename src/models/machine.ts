export type SetupStepTasks = {
	title: string;
	desc: string | null;
};

export type SetupStep = {
	title: string;
	desc: string | null;

	setupStepTasks: SetupStepTasks[];
};

export type MachineType = {
	slug: string;
	title: string;

	setupSteps: SetupStep[];
};
