import SidebarCeo from "@/components/sidebarCeo";
import Navbarceo from "@/components/navbarCeo";

export default function ManagerLayout({ children }) {
  return (
    <div className="flex flex-row h-[100vh] w-[100vw]">
      <div className="hidden md:flex md:flex-col lg:w-[15vw] md:w-[15vw] md:insert-y-0 bg-gray-900">
        <SidebarCeo />
      </div>
      <main className="md:w-[85vw] h-[100%]">
        <Navbarceo />
        {children}
      </main>
    </div>
  );
}
