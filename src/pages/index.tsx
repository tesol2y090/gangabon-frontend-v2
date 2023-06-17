import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gangabon Protocol</title>
      </Head>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                dMRV for Energy
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Cheapest, simplest, and fastest way to get certificates that
                  we can trust.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1586366461834-d2d65d725a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40" id="problem">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Problem
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Most of renewable energy projects can’t access to certificate
                  or credit issuance because measurement, reporting,
                  verification is only for rich people.
                </p>
              </div>

              <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mr-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                  <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                    5
                  </p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight text-gray-900">
                      Lack of auditors
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      In my country (Thailand), we only have qualifed 5
                      auditors.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                  <p className="flex-none text-3xl font-bold tracking-tight text-white">
                    $2,000
                  </p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight text-white">
                      To get certificates is costly
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-400">
                      You have to pay for registration, auditing, verification,
                      consultation, transaction costs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                  <p className="flex-none text-3xl font-bold tracking-tight text-white">
                    8-20 Weeks
                  </p>
                  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                    <p className="text-lg font-semibold tracking-tight text-white">
                      Time consuming
                    </p>
                    <p className="mt-2 text-base leading-7 text-indigo-200">
                      From registration process to document preparation to
                      auditing to certificate issuance. It takes like forever.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8"
                id="solution"
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Solution
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  We use community-based measurement, reporting, and
                  verification (Also known as Participatory MRV) because smart
                  meter is traceable on blockchain and double counting is better
                  monitored by thousand eyes.
                </p>

                <p className="mt-6 text-base leading-7 text-gray-600">
                  We particularly focused on emerging markets and developing
                  countries that are struggling to transition to clean energy
                  infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="https://images.pexels.com/photos/532192/pexels-photo-532192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Registrants */}
        <div
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
          id="project"
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-6 text-base leading-5 text-gray-400">
              For Regisrants
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Submit Your Project
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              For all renewable energy owners, with Gangabon, you can earn RECs
              with MUCH LOWER cost and SHORTER time than traiditional MRV ways.
            </p>
          </div>
          <div>
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/shrbbb0tMvQ074GBA?backgroundColor=green"
              frameBorder="0"
              width="100%"
              height="533"
              style={{ background: "transparent", border: "1px solid #ccc" }}
            ></iframe>
          </div>
        </div>

        {/* For Auditors */}
        <div
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
          id="participate"
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-6 text-base leading-5 text-gray-400">
              For Auditors
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Earn Reward by MRV
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Get paid directly to your wallet with your expertise.
            </p>
            {/* <div className="mt-6 lg:flex lg:flex-1 lg:justify-center">
              <button className="flex w-40 items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Launch App
              </button>
            </div> */}
          </div>
        </div>
      </main>
    </>
  )
}
