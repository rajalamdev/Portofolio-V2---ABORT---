import Link from "next/link"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath(router.pathname)
  }, [router.pathname])

  const navLinks = [
    {name: "Home", href: "/"},
    {name: "Projects", href: "/projects"},
    {name: "Blog", href: "/blog"},
    {name: "Contact", href: "/contact"},
    {name: "About", href: "/about"},    
  ]  

  return (
    <nav className="flex justify-between py-6 custom-container text-sm">   
        <div className="text-text-primary text-2xl sm:text-3xl font-yellowTail flex items-center gap-1">
          <div className="bg-text-blue h-2 w-2 rounded-full"></div>
          <div className="bg-text-pink h-2 w-2 rounded-full"></div>
          Raj Alam
        </div>
        <div className="gap-10 items-center font-jakartaSans lg:flex hidden">
            {navLinks.map(link => <Link key={link.name} href={link.href}>{link.name}</Link>)}
        </div>
        <div className="gap-4 items-center lg:flex hidden">
            <div className="flex gap-2">
              <DarkModeOutlinedIcon className="text-text-blue" />
            </div>
            <div className="bg-[#282f4e] h-6 w-[2px] self-center"></div>
            <div className="flex gap-2">
                <LinkedInIcon className="text-blue-400" />
                <GitHubIcon />
            </div>
        </div>
    </nav>
  )
}

export default Navbar