import { useGangabon } from "@/hooks/contracts/useGangabon"
import Head from "next/head"
import { useSigner } from "wagmi"
import { ethers } from "ethers"
import { use, useEffect, useState } from "react"
import classNames from "classnames"
import Link from "next/link"
import { getIFPSLink } from "@/utils"

const App = () => {
  const { data: signer } = useSigner()
  const [allDMRVs, setAllDMRVs] = useState<any>([])
  const { getDMRVs } = useGangabon(signer as ethers.Signer)

  useEffect(() => {
    const getData = async () => {
      const data = await getDMRVs()
      setAllDMRVs(data)
    }

    getData()
  }, [signer])

  return (
    <div className="bg-white">
      <Head>
        <title>dMRVs | Gangabon</title>
      </Head>
      <main className="isolate">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our dMRVs
          </h2>
          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            {allDMRVs.map((mrv: any) => (
              <Link
                href={getIFPSLink(mrv.cid)}
                key={mrv.tokenId}
                className="col-span-1 flex rounded-md shadow-sm"
                target="_blank"
              >
                <div
                  className={classNames(
                    {
                      "bg-green-500": Number(mrv.tokenId) % 2 === 0,
                      "bg-blue-500": Number(mrv.tokenId) % 2 !== 0,
                    },
                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                  )}
                >
                  DMRVs
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a
                      // href={project.href}
                      className="font-medium text-gray-900 hover:text-gray-600"
                    >
                      Token ID : {mrv.tokenId}
                    </a>
                    <p className="text-gray-500">{mrv.cid} Members</p>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
