import { Link } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
// import { useAuth } from '@redwoodjs/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }) => {
  /*** get necessary properties from useAuth() ***/
  const { logIn, logOut, isAuthenticated, userMetadata } = useAuth()
  // const { isAuthenticated, signUp } = useAuth()

  return (
    <>
      <div className="relative h-screen bg-white font-mono dark:bg-gray-800">
        <header className="z-30 flex h-24 w-full items-center sm:h-32">
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="flex items-center text-3xl font-black uppercase text-gray-800 dark:text-white">
              <span className="text-l ml-3 mt-1">Test Project</span>
            </div>
            <div className="flex items-center">
              <nav className="font-sen hidden items-center text-lg uppercase text-gray-800 dark:text-white lg:flex">
                <div className="right flex space-x-2">
                  <div className="right flex space-x-2">
                    {isAuthenticated && (
                      <span className="span">{userMetadata.email}</span>
                    )}

                    <button
                      className="link-button"
                      onClick={isAuthenticated ? logOut : logIn}
                    >
                      {isAuthenticated ? 'Log Out' : 'Log In'}
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <main className="relative z-20 flex items-center">
          <div className="container relative mx-auto flex flex-col items-center justify-between px-6 py-4">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default MainLayout
