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

	setupStepTasks: SetupStepTaskType[];
};

export type MachineType = {
	slug: string;
	title: string;
	desc?: string;

	setupSteps: SetupStepType[];
};

export type MachinesType = MachineType[];
