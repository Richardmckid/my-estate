import NavBar from "../components/NavBar";

export default function AppLayout({children}) {
    return (
        <div className="bg-white w-full">
            <div className="pb-20">
                <NavBar />
            </div>
            {children}
        </div>
    );
}
  