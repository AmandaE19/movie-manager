// src/styles/theme.ts
import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	background: "#121113",
	text: "#EEEEF0",
	primary: "#8E4EC6",
	secondary: "#6F6D78",

	colors: {
		purple: {
			1: "#FEFCFE",
			2: "#FBF7FE",
			3: "#F7EDFE",
			4: "#F2E2FC",
			5: "#EAD5F9",
			6: "#E0C4F4",
			7: "#D1AFEC",
			8: "#BE93E4",
			9: "#8E4EC6",
			10: "#8347B9",
			11: "#8145B5",
			12: "#402060",
		},
		purpleAlpha: {
			1: "#AA00AA03",
			2: "#8000E008",
			3: "#8E00F112",
			4: "#8D00E51D",
			5: "#8000DB2A",
			6: "#7A01D03B",
			7: "#6D00C350",
			8: "#6600C06C",
			9: "#5C00ADB1",
			10: "#53009EB8",
			11: "#52009ABA",
			12: "#250049DF",
		},
		mauve: {
			1: "#FDFCFD",
			2: "#FAF9FB",
			3: "#F2EFF3",
			4: "#EAE7EC",
			5: "#E3DFE6",
			6: "#DBD8E0",
			7: "#D0CDD7",
			8: "#BCBAC7",
			9: "#8E8C99",
			10: "#84828E",
			11: "#65636D",
			12: "#211F26",
		},
		mauveAlpha: {
			1: "#55005503",
			2: "#2B005506",
			3: "#30004010",
			4: "#20003618",
			5: "#20003820",
			6: "#14003527",
			7: "#10003332",
			8: "#08003145",
			9: "#05001D73",
			10: "#0500197D",
			11: "#0400119C",
			12: "#020008E0",
		},
		button: {
			primary: {
				1: "#8E4EC6",
				2: "#9A5CD0",
				3: "#8457AA",
				4: "#6F6D78",
				text: {
					1: "#FFFFFF",
					2: "#ECE9FD49",
				} 
			},
			secondary: {
				1: "#B744F708",
				2: "#C150FF18",
				3: "#B412F904",
				4: "#EBEAF808",
				text: {
					1: "#F1DDFF98",
					2: "#ECE9FD49",
				} 
			}
		}
	},
};

export const darkTheme: DefaultTheme = {
	background: "#121113",
	text: "#EEEEF0",
	primary: "#8E4EC6",
	secondary: "#6F6D78",

	colors: {
		purple: {
			1: "#18111B",
			2: "#1E1523",
			3: "#3D224E",
			4: "#3D224E",
			5: "#48295C",
			6: "#54346B",
			7: "#664282",
			8: "#8457AA",
			9: "#8E4EC6",
			10: "#9A5CD0",
			11: "#D19DFF",
			12: "#ECD9FA",
		},
		purpleAlpha: {
			1: "#B412F90B",
			2: "#B744F714",
			3: "#C150FF2D",
			4: "#BB53FD42",
			5: "#BE5CFD51",
			6: "#C16DFD61",
			7: "#C378FD7A",
			8: "#C47EFFA4",
			9: "#B661FFC2",
			10: "#BC6FFFCD",
			11: "#D19DFF",
			12: "#F1DDFFFA",
		},
		mauve: {
			1: "#121113",
			2: "#1A191B",
			3: "#232225",
			4: "#2B292D",
			5: "#323035",
			6: "#3C393F",
			7: "#49474E",
			8: "#625F69",
			9: "#6F6D78",
			10: "#7C7A85",
			11: "#B5B2BC",
			12: "#EEEEF0",
		},
		mauveAlpha: {
			1: "#00000000",
			2: "#F5F4F609",
			3: "#EBEAF814",
			4: "#EEE5F81D",
			5: "#EFE6FE25",
			6: "#F1E6FD30",
			7: "#EEE9FF40",
			8: "#EEE7FF5D",
			9: "#EAE6FD6E",
			10: "#ECE9FD7C",
			11: "#F5F1FFB7",
			12: "#FDFDFFEF",
		},
		button: {
			primary: {
				1: "#8E4EC6",
				2: "#9A5CD0",
				3: "#8457AA",
				4: "#6F6D78",
				text: {
					1: "#FFFFFF",
					2: "#ECE9FD49",
				} 
			},
			secondary: {
				1: "#B744F708",
				2: "#C150FF18",
				3: "#B412F904",
				4: "#EBEAF808",
				text: {
					1: "#F1DDFF98",
					2: "#ECE9FD49",
				} 
			}
		}
	},
};
