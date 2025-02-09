import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sidbar from './Sidbar.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex">
      <div className="fixed -z-0">
        <Sidbar />
      </div>

      <div className="flex flex-col min-h-screen w-full lg:ml-[20%]">
        <main className="flex-1 bg-[#F4F2EE]">
          <div className="container mx-auto p-4">
            <Outlet />
          </div>
        </main>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}