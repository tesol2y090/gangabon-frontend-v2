import { useMemo } from "react"

import { useSWRFetch } from "../useFetch"
import { FetchConfig, FetchParam, generateAirTableUrl } from ".."
import { configs } from "@/configs"

interface IProject {
  createdTime: string
  fields: {
    "Company Name": string
    "Full Name": string
    "Position Title": string
    image: string
  }
  id: string
}

interface IProjectsResponse {
  records: IProject[]
}

function useGetEngineers(param?: FetchParam, config?: FetchConfig) {
  const url = useMemo(
    () => generateAirTableUrl({ param, tableId: configs.engineersTableId }),
    [param]
  )
  const { data, error } = useSWRFetch<IProjectsResponse>(url, config)

  return {
    engineers: data
      ? data.records.filter((obj) => Object.keys(obj.fields).length !== 0)
      : [],
    isLoading: !error && Object.keys(data || {}).length === 0,
    isError: error !== undefined,
  }
}

export { useGetEngineers }
