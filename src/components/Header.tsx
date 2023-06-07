import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { useRouter } from "next/router"

const navigation = [
  { name: "Project", href: "/app" },
  { name: "Engineer", href: "/engineers" },
  { name: "dMRV", href: "/dmrv" },
  { name: "About", href: "/about" },
]

const Header = () => {
  const { pathname } = useRouter()

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Gangabon</span>
            <img
              className="h-12 w-auto"
              src="/images/logo-with-text.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {pathname === "/" ? (
            <Link href="/app">
              <button className="flex w-40 items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Launch App
              </button>
            </Link>
          ) : (
            <ConnectButton />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
