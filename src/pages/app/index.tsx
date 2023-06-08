import { useGetProjects } from "@/hooks/api/useGetProjects"
import Head from "next/head"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"

const App = () => {
  const { projects, isLoading } = useGetProjects()

  return (
    <div className="bg-white">
      <Head>
        <title>App | Gangabon</title>
      </Head>
      <main className="isolate">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Projects
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {isLoading &&
              new Array(8).fill(0).map((_, i) => (
                <div key={i} className="group relative cursor-pointer">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Skeleton className="w-full h-full" />
                  </div>
                  <Skeleton className="mt-5" height={10} />
                  <Skeleton height={10} />
                </div>
              ))}
            {projects &&
              projects.map((product) => (
                <Link
                  href={`/project/${product.id}`}
                  key={product.id}
                  className="group relative cursor-pointer"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.fields.image}
                      alt={product.fields["Project Name"]}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700 font-bold">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.fields["Project Name"]}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.fields["Contact Person Full Name"]}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.fields["Project Type"]}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
