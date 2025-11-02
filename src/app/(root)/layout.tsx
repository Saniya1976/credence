import Image from "next/image";
import SideBar from "../../components/SideBar";
import MobileNavbar from "../../components/MobileNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { user: "Sanya" };
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={40}
            height={40}
            alt="Credence Logo"
          />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>

        {children}

      </div>
    </main>
  );
}