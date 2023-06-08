import { useGetVerifiedProjects } from "@/hooks/api/useGetVerifiedProjects"
import { useGangabon } from "@/hooks/contracts/useGangabon"
import Head from "next/head"
import { useRouter } from "next/router"
import { useSigner } from "wagmi"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { mapStatusToText } from "@/utils"
import { ApplicationStatus, Vote } from "@/types/vote"
import { toast } from "react-toastify"
import Spinner from "@/components/Spinner"
import classNames from "classnames"

const App = () => {
  const { projects } = useGetVerifiedProjects()
  const { query } = useRouter()
  const { data: signer } = useSigner()
  const { getApplication, vote, getIsVote } = useGangabon(
    signer as ethers.Signer
  )
  const [application, setApplication] = useState<any>(null)
  const [isVote, setIsVote] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [tick, setTick] = useState<number>(0)
  const currentProject = projects?.find(
    (project) => project.fields["Project ID"][0] === query.projectId
  )

  const increaseTick = () => setTick(tick + 1)

  useEffect(() => {
    if (!currentProject) return
    const getProject = async () => {
      const data = await getApplication(
        Number(currentProject.fields["Verified ID"]) - 1
      )

      setApplication(data)
    }

    const getUserIsVote = async () => {
      const data = await getIsVote(
        Number(currentProject.fields["Verified ID"]) - 1
      )

      setIsVote(data || false)
    }

    getProject()
    getUserIsVote()
  }, [currentProject, signer, tick])

  const onApprove = async (userVote: Vote) => {
    if (!currentProject) return

    setIsLoading(true)
    try {
      const tx = await vote(
        Number(currentProject.fields["Verified ID"]) - 1,
        userVote
      )

      await tx?.wait()

      toast.success("Approved successfully")

      setIsVote(true)
    } catch (e: any) {
      toast.error(e.message)
    } finally {
      increaseTick()
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white">
      <Head>
        <title>App | Gangabon</title>
      </Head>
      <main className="isolate">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {currentProject?.fields["Company Name (from Audited byy)"][0]}
          </h2>
        </div>

        {/* Image gallery */}
        <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={currentProject?.fields["Satellite Photo"]}
              alt={currentProject?.fields["Satellite Photo"]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={currentProject?.fields["Satellite Photo"]}
                alt={currentProject?.fields["Satellite Photo"]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={currentProject?.fields["Satellite Photo"]}
                alt={currentProject?.fields["Satellite Photo"]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={currentProject?.fields["Satellite Photo"]}
              alt={currentProject?.fields["Satellite Photo"]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:pt-10 lg:max-w-7xl lg:px-8">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Applicant Information
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Audited By
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {currentProject?.fields["Full Name (from Audited byy)"]}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Position Title
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {currentProject?.fields["Position Title (from Audited byy)"]}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Company Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {currentProject?.fields["Company Name (from Audited byy)"]}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  CO2 Calculator - Additionality
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {currentProject?.fields["CO2 Calculator - Additionality"]}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  CO2 Calculator - Baseline Scenario
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {currentProject?.fields["CO2 Calculator - Baseline Scenario"]}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  CO2 Calculator - Amount of CO2 Emissions Avoided
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {
                    currentProject?.fields[
                      "CO2 Calculator - Amount of CO2 Emissions Avoided"
                    ]
                  }
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Length Period of the Project Carbon Credit
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {
                    currentProject?.fields[
                      "Length Period of the Project Carbon Credit"
                    ]
                  }
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Risk Assessments
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {currentProject?.fields["Risk Assessments"]}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Status
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {application && (
                    <span
                      className={classNames(
                        "inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ",
                        {
                          "bg-yellow-100 text-yellow-800":
                            application.status === ApplicationStatus.Voting,
                          "bg-red-100 text-red-800":
                            application.status === ApplicationStatus.Rejected,
                          "bg-green-100 text-green-800":
                            application.status === ApplicationStatus.Complete,
                        }
                      )}
                    >
                      <svg
                        className={classNames("h-1.5 w-1.5", {
                          "fill-yellow-700":
                            application.status === ApplicationStatus.Voting,
                          "fill-red-700":
                            application.status === ApplicationStatus.Rejected,
                          "fill-green-700":
                            application.status === ApplicationStatus.Complete,
                        })}
                        viewBox="0 0 6 6"
                        aria-hidden="true"
                      >
                        <circle cx={3} cy={3} r={3} />
                      </svg>
                      {mapStatusToText(application.status)}
                    </span>
                  )}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Approved
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {application && application.yay.toString()}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Rejected
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {application && application.nay.toString()}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Required Vote
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {application && application.totalVote.toString()}
                </dd>
              </div>
              <div className="py-6 w-full flex items-center gap-x-4">
                {application &&
                application.status === ApplicationStatus.Voting ? (
                  isVote ? (
                    <button
                      disabled
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-300 px-8 py-3 text-base font-medium text-white"
                    >
                      Your already voted
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => onApprove(Vote.nay)}
                        disabled={isLoading}
                        className="mt-10 flex w-1/2 items-center justify-center rounded-md border border-transparent disabled:bg-red-300 bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        {isLoading && <Spinner className="mr-2" />}
                        Reject
                      </button>
                      <button
                        onClick={() => onApprove(Vote.yay)}
                        disabled={isLoading}
                        className="mt-10 flex w-1/2 items-center justify-center rounded-md border border-transparent disabled:bg-green-300 bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        {isLoading && <Spinner className="mr-2" />}
                        Approve
                      </button>
                    </>
                  )
                ) : (
                  <button
                    disabled
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-300 px-8 py-3 text-base font-medium text-white"
                  >
                    Voting is closed
                  </button>
                )}
              </div>
            </dl>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
