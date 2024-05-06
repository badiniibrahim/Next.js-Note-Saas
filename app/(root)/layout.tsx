import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/*<Sidebar />*/}
      <div className="root-container">
        <div className="wrapper">
          <Navbar />
          {children}
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
