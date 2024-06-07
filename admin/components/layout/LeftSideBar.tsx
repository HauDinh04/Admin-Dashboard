"use client"
import { UserButton } from "@clerk/nextjs"
import  Link  from "next/link"
import Image from "next/image"
import { navLinks } from "@/lib/constants"
import { usePathname } from "next/navigation"

const LeftSideBar = () => {
  const pathName=usePathname();
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex  flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden">
    <Image src={'/logo1.png'} alt="logo" width={100} height={50} />
    <div className="flex flex-col gap-12">
    {navLinks.map((link)=>(
      <Link href={link.url}key={link.label} className={`flex gap-4 text-body-medium ${pathName===link.url ? "text-blue-1":'text-grey-1'}`}>{link.icon} <p>{link.label}</p></Link>
    ))}
    </div>
        <div className="flex gap-4 text-body-medium items-center"><UserButton /><p>Edit profiles</p></div>
    </div>
  )
}

export default LeftSideBar