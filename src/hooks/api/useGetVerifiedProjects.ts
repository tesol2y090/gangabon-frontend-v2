import { useMemo } from "react"

import { useSWRFetch } from "../useFetch"
import { FetchConfig, FetchParam, generateAirTableUrl } from ".."
import { configs } from "@/configs"

interface IProject {
  createdTime: string
  fields: {
    "Approve the client's application": string
    "Audited byy": string[]
    "CO2 Calculator - Additionality": string
    "CO2 Calculator - Amount of CO2 Emissions Avoided": string
    "CO2 Calculator - Baseline Scenario": string
    "CO2 Calculator - Leakage Emission": string
    "End date of electricity generated": string
    "CO2 Calculator - Project Activity Emission": string
    "Company Name (from Audited byy)": string[]
    "Double Spending Check": string
    "Full Name (from Audited byy)": string[]
    "Length Period of the Project Carbon Credit": string
    "Level of Assurance": string
    "Materiality Threshold": string
    "Position Title (from Audited byy)": string[]
    "Project ID": string[]
    "Risk Assessments": string
    "Satellite Photo": string
    "Verified ID": string
  }
  id: string
}

interface IProjectsResponse {
  records: IProject[]
}

function useGetVerifiedProjects(param?: FetchParam, config?: FetchConfig) {
  const url = useMemo(
    () =>
      generateAirTableUrl({ param, tableId: configs.verifiedProjectTableId }),
    [param]
  )
  const { data, error } = useSWRFetch<IProjectsResponse>(url, config)

  return {
    projects: data
      ? data.records.filter((obj) => Object.keys(obj.fields).length !== 0)
      : [],
    isLoading: !error && !Array.isArray(data),
    isError: error !== undefined,
  }
}

export { useGetVerifiedProjects }
