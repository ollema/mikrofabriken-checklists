type TaskType = {
	title: string;
	desc?: string;
	done: { [user: string]: boolean };
};

type StepType = {
	title: string;
	desc?: string;
	done: { [user: string]: boolean };

	tasks: { [taskId: string]: TaskType };
};

export type MachineType = {
	title: string;
	desc?: string;

	setupSteps: { [stepId: string]: StepType };
};

export type MachinesType = { [machineId: string]: MachineType };
