// src/styles/theme.ts
import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	background: "#FCFCFD",
	text: "#1D1D20",
	primary: "#7C51FF", // purple9
	secondary: "#8E8E9C", // mauve9

	colors: {
		purple: {
			1: "#FAF8FF",
			2: "#F4F0FF",
			3: "#EBE4FF",
			4: "#E1D9FF",
			5: "#D6CCFF",
			6: "#C8BBFF",
			7: "#B5A3FF",
			8: "#9D84FF",
			9: "#7C51FF",
			10: "#723DFD",
			11: "#671FE4",
			12: "#4F0ACF",
		},
		mauve: {
			1: "#FCFCFD",
			2: "#F9F9FB",
			3: "#F0F0F3",
			4: "#E8E8EC",
			5: "#E0E0E6",
			6: "#D9D9E0",
			7: "#CECED6",
			8: "#BCBCC6",
			9: "#8E8E9C",
			10: "#80808E",
			11: "#666673",
			12: "#1D1D20",
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
			1: "#1B0F25",
			2: "#221431",
			3: "#301A3D",
			4: "#3D224E",
			5: "#482B5E",
			6: "#54346E",
			7: "#623E7F",
			8: "#734D91",
			9: "#8E4EC6",
			10: "#9A5CD0",
			11: "#BF7AF0",
			12: "#F1E0FF",
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
			12: "#ECE9FD",
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
