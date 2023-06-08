import "@/styles/globals.css"
import type { AppProps } from "next/app"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { sepolia } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "react-loading-skeleton/dist/skeleton.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const { chains, provider } = configureChains(
  [sepolia],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "Gangabon",
  chains,
})

export const wgmiClient = createClient({
  autoConnect: true,
  provider,
  connectors,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wgmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="bg-white min-h-screen flex flex-col">
          <ToastContainer />
          <Header />
          <div className="flex-1 mt-8">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
