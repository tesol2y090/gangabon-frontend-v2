import { useGetEngineers } from "@/hooks/api/useGetEngineers"
import Head from "next/head"
import Skeleton from "react-loading-skeleton"

const App = () => {
  const { engineers, isLoading } = useGetEngineers()

  return (
    <div className="bg-white">
      <Head>
        <title>App | Gangabon</title>
      </Head>
      <main className="isolate">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Verifiers
          </h2>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <ul role="list" className="divide-y divide-gray-100">
            {isLoading &&
              new Array(5).fill(0).map((_, i) => (
                <li key={i} className="flex items-center py-5 justify-between">
                  <div className="flex gap-x-4">
                    <Skeleton width={48} height={48} circle />
                    <Skeleton width={100} height={20} />
                  </div>
                  <Skeleton width={100} height={20} />
                </li>
              ))}
            {engineers.map((person) => (
              <li key={person.id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={person.fields["image"]}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.fields["Full Name"]}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.fields["Position Title"]}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {person.fields["Company Name"]}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
