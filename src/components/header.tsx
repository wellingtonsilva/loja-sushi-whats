import { Logo } from "@/components/logo"
import { ThemeToggle } from "./theme-toggle"
import { Sidebar } from "@/components/cart/sidebar"

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
        <div className="flex items-center gap-3">
            <Logo />
            <ThemeToggle />
        </div>
        <div className="flex items-center gap-3">   
            <Sidebar />
        </div>
        
    </header>
  )
}
