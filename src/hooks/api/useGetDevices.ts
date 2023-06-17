import { useMemo } from "react"

import { useSWRFetch } from "../useFetch"
import { FetchConfig, FetchParam, generateAirTableUrl } from ".."
import { configs } from "@/configs"

interface IDevice {
  createdTime: string
  fields: {
    "Owned by company ID": string
    "Legal Business Name (from Owned by company ID)": string[]
    "Website URL (from Owned by company ID)": string
    "Wallet Address (from Owned by company ID)": string
    "Project Type": string
    "Production Facility Name": string
    "Facility Address": string
    Latitude: string
    "Device ID": string
    Longitude: string
    "Device Model": string
    "Installed Capacity": string
    "Meter or Measurement ID(s)": string
    "Connect to grid?": string
    "Commissioning date": string
    "If the Production Device is not connected directly to the grid, specify the circumstances, and additional relevant meter registration numbers": string
    "Expected form of volume evidence": string
    "Removal Type and Code (Fuel and Technology)": string
    "Is there an on-site (captive) consumer present? ": string
    "Auxiliary/standby energy sources present? ": string
    "Please give details of how the site can import electricity by means other than through the meter(s) specified above ": string
    "Please give details (including registration id) of any carbon offset or energy tracking scheme for which the Production Facility is registered. State ‘None’ if that is the case": string
    "Please identify any Labelling Scheme(s) for which the Production Facility is accredited ": string
    "Has the Production Facility ever received public (government) funding (e.g. Feed in Tariff)?": string
    "Requested effective date of registration": string
    "Sample metering evidence": string
    "A single line electrical diagram": string
    "Double Counting check": string
    "Expired date": string
    image: string
  }
  id: string
}

interface IDevicesResponse {
  records: IDevice[]
}

function useGetDevices(param?: FetchParam, config?: FetchConfig) {
  const url = useMemo(
    () => generateAirTableUrl({ param, tableId: configs.tableId }),
    [param]
  )
  const { data, error } = useSWRFetch<IDevicesResponse>(url, config)
  return {
    devices: data
      ? data.records.filter((obj) => Object.keys(obj.fields).length !== 0)
      : [],
    isLoading: !error && Object.keys(data || {}).length === 0,
    isError: error !== undefined,
  }
}

export { useGetDevices }
