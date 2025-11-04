'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "../../constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-blue-400">
          <Link href="/" className="cursor-pointer flex items-center gap-2 mb-12">
            <Image 
              src="/icons/logo.svg"
              width={50}
              height={50}
              alt="Credence Logo"
              className="size-[50px]"
            />
            <h1 className="text-2xl font-bold text-white">Credence</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-4 pt-8">
                  {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                  <SheetClose asChild key={item.route}>
                    <Link href={item.route} key={item.label}
                      className={cn('flex items-center gap-3 py-3 px-4 rounded-lg text-white font-bold hover:bg-white hover:text-blue-600 transition-colors w-full', { 'bg-blue-50 text-blue-600': isActive })}
                    >
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
                      <p className="font-bold">
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                )
              })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav