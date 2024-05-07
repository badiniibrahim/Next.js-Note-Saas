import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
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
