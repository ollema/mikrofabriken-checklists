export type SetupStepTaskSettingsType = {
	done: boolean;
	skipped: boolean;
};

export type SetupStepSettingsType = {
	done: boolean;
	skipped: boolean;

	setupStepTaskSettings: { [key: number]: SetupStepTaskSettingsType };
};

export type MachineSettingsType = {
	setupStepSettings: { [key: number]: SetupStepSettingsType };
};

export type UserdataType = {
	machineSettings: { [key: string]: MachineSettingsType };
};
