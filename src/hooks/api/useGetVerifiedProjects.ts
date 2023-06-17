import { useMemo } from "react"

import { useSWRFetch } from "../useFetch"
import { FetchConfig, FetchParam, generateAirTableUrl } from ".."
import { configs } from "@/configs"

interface IProject {
  createdTime: string
  fields: {
    "Issue ID": string
    "Device ID": string
    "Owned by company ID (from Device ID)": string
    "Legal Business Name (from Owned by company ID) (from Device ID)": string
    "Website URL (from Owned by company ID) (from Device ID)": string
    "Wallet Address (from Owned by company ID) (from Device ID)": string
    "Project Type (from Device ID)": string
    "Production Facility Name (from Device ID)": string
    "Facility Address (from Device ID)": string
    "Latitude (from Device ID)": string
    "Longitude (from Device ID)": string
    "Device Model (from Device ID)": string
    "Installed Capacity (from Device ID)": string
    "Meter or Measurement ID(s) (from Device ID)": string
    "Connect to grid? (from Device ID)": string
    "Commissioning date (from Device ID)": string
    "Owner of the network to which the Production Device is connected and the voltage of that connection (from Device ID)": string
    "If the Production Device is not connected directly to the grid, specify the circumstances, and additional relevant meter registration numbers (from Device ID)": string
    "Expected form of volume evidence (from Device ID)": string
    "Removal Type and Code (Fuel and Technology) (from Device ID)": string
    "Is there an on-site (captive) consumer present? (from Device ID)": string
    "Auxiliary/standby energy sources present? (from Device ID)": string
    "Please give details of how the site can import electricity by means other than through the meter(s) specified above (from Device ID)": string
    "Please give details (including registration id) of any carbon offset or energy tracking scheme for which the Production Facility is registered. State 'None' if that is the case (from Device ID)": string
    "Please identify any Labelling Scheme(s) for which the Production Facility is accredited (from Device ID)": string
    "Has the Production Facility ever received public (government) funding (e.g. Feed in Tariff)? (from Device ID)": string
    "Requested effective date of registration (from Device ID)": string
    "image (from Device ID)": string
    "Sample metering evidence (from Device ID)": string
    "A single line electrical diagram (from Device ID)": string
    "Proof that the Registrant is the owner of the energy attributes (from Device ID)": string
    "Additional Info (from Device ID)": string
    "Expired date (from Device ID)": string
    "Start date": string
    "End date": string
    "Total product during period in MWh": string
    "dREC applied for": string
    "Energy Source": string
    "Type of supporting evidence": string
    "Is the production of this electricity counted towards a national, sub-national or regulatory target?": string
    "Is any of this production subject to a public consumption obligation?": string
    "Audited by": string
    "Position Title (from Audited by)": string
    "Company Name (from Audited by)": string
    "Satellite Photo": string
    "Double Spending Check": string
    "Issuing Declaration": string
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
  console.log(data)

  return {
    projects: data
      ? data.records.filter((obj) => Object.keys(obj.fields).length !== 0)
      : [],
    isLoading: !error && !Array.isArray(data),
    isError: error !== undefined,
  }
}

export { useGetVerifiedProjects }
