"use client";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../../constants";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar !bg-blue-400">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={50}
            height={50}
            alt="Credence Logo"
            className="size-[50px] max-xl:size-14"
          />
          <h1 className="sidebar-logo text-white font-bold max-xl:hidden">Credence</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link text-white font-bold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-3', { "bg-blue-50 text-blue-600": isActive })}>
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn('brightness-0 invert', {
                    'brightness-100 invert-0': isActive
                  })}
                />
              </div>
              <p className="font-bold max-xl:hidden">{item.label}</p>
            </Link>
          )
        })}
      </nav>
    </section>
  );
};

export default SideBar;