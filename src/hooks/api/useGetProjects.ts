import { useMemo } from "react"

import { useSWRFetch } from "../useFetch"
import { FetchConfig, FetchParam, generateUrl } from ".."

interface IProject {
  createdTime: string
  fields: {
    "Amount of electricity produced in a given period in kWh": string
    "Company Name": string[]
    "Connect to Grid?": string
    "Contact Person Email": string
    "Contact Person Full Name": string
    "Device Model": string
    "End date of electricity generated": string
    "Google Map Location": string
    ID: string
    "Project Name": string
    "Project Type": string
    "Smart Meter API Evidence": string
    "Start date of electricity generated": string
    "The Energy Source": string
    Verified_Projects: string[]
    image: string
  }
  id: string
}

interface IProjectsResponse {
  records: IProject[]
}

function useGetProjects(param?: FetchParam, config?: FetchConfig) {
  const url = useMemo(() => generateUrl({ param }), [param])
  const { data, error } = useSWRFetch<IProjectsResponse>(url, config)
  return {
    projects: data
      ? data.records.filter((obj) => Object.keys(obj.fields).length !== 0)
      : [],
    isLoading: !error && !Array.isArray(data),
    isError: error !== undefined,
  }
}

export { useGetProjects }
