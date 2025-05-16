import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		background: string;
		text: string;
		primary: string;
		secondary: string;
		colors: {
			purple: {
				[key: number]: string;
			};
			purpleAlpha: {
				[key: number]: string;
			};
			mauve: {
				[key: number]: string;
			};
			mauveAlpha: {
				[key: number]: string;
			};
			button?: {
				primary: {
					[key: number]: string;
					text: {
						[key: number]: string;
					}
				};
				secondary: {
					[key: number]: string;
					text: {
						[key: number]: string;
					}
				};
			};
		};
	}
}
