export type SetupStepTaskType = {
	id: number;
	title: string;
	desc?: string;
	done?: boolean;
	skipped?: boolean;
};

export type SetupStepType = {
	id: number;
	title: string;
	desc?: string;
	done?: boolean;
	skipped?: boolean;

	setupStepTasks: { [key: number]: SetupStepTaskType };
};

export type MachineType = {
	slug: string;
	title: string;
	desc?: string;

	setupSteps: { [key: number]: SetupStepType };
};

export type MachinesType = { [key: string]: MachineType };
