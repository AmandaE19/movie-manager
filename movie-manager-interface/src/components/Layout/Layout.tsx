import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import { MockToggle } from "../MockToggle/MockToggle";
import * as S from "./Layout.styled";
import type { LayoutProps } from "../../types/global";

const Layout = ({ children }: LayoutProps) => {
	return (
		<S.Wrapper>
			<S.Background />
			<MockToggle />
			<TopBar />
			<S.MainContent>{children}</S.MainContent>
			<Footer />
		</S.Wrapper>
	);
};

export default Layout;
