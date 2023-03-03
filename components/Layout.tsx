import Navbar from "./Navbar/Navbar"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <header className="sticky top-0 bg-gradient-to-br from-bg-glass-primary to-bg-glass-secondary
        backdrop-blur-md z-30">
            <Navbar />
        </header>
        <main className="custom-container">
            {children}
        </main>
    </>
  )
}

export default Layout