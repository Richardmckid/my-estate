import NavBar from "../components/NavBar";
import TopNav from "../components/TopNav";
import Container from "./container";

export default function AppLayout({children}) {
    return (
        <div className="bg-gray-100 w-full">
            <div className="w-full bg-white">
                <Container>
                    <TopNav/>
                </Container>
                <NavBar/>
            </div>
            {children}
        </div>
    );
}
  