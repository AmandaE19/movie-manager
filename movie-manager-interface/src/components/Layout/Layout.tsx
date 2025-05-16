import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";
import * as S from "./Layout.styled";

interface LayoutProps {
	children: any;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<S.Wrapper>
			<S.Background />
			<TopBar />
			<S.MainContent>{children}</S.MainContent>
			<Footer />
		</S.Wrapper>
	);
};

export default Layout;
