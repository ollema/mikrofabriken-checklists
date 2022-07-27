export enum Status {
	Todo = 'TODO',
	Skipped = 'SKIPPED',
	Done = 'DONE'
}

type TaskType = {
	title: string;
	desc?: string;
	status: { [user: string]: Status };
};

type StepType = {
	title: string;
	desc?: string;
	status: { [user: string]: Status };

	tasks: { [taskId: string]: TaskType };
};

export type MachineType = {
	title: string;
	desc?: string;

	setupSteps: { [stepId: string]: StepType };
};

export type MachinesType = { [machineId: string]: MachineType };
