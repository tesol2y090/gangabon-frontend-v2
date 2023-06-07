import { useGetProjects } from "@/hooks/api/useGetProjects"
import Head from "next/head"

const App = () => {
  const { projects } = useGetProjects()

  return (
    <div className="bg-white">
      <Head>
        <title>App | Gangabon</title>
      </Head>
      <main className="isolate">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Projects
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {projects &&
              projects.map((product) => (
                <div key={product.id} className="group relative cursor-pointer">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.fields.image}
                      alt={product.fields["Project Name"]}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.fields["Project Name"]}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.fields["Company Name"]}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.fields["Project Type"]}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
