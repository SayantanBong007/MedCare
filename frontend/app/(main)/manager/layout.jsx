import Sidebar from "@/components/sidebarManager";
import Navbar from "@/components/navbarManager";

export default function ManagerLayout({ children }) {
  return (
    <div className="flex flex-row h-[100vh] w-[100vw]">
      <div className="hidden md:flex md:flex-col lg:w-[15vw] md:w-[15vw] md:insert-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:w-[85vw] h-[100%]">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
