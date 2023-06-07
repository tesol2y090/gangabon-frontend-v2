import { SWRConfiguration } from "swr"

import { configs } from "../configs"

export enum API {
  OrderBooks = "",
  MarketTrades = "",
  OpenOrders = "orders",
  OrdersHistory = "history",
  ProtocolVolume = "protocolVolume",
  GetPrice = "coins/markets",
}

export enum APIInfo {
  ChainStats = "chain-stats",
  ChainInfo = "chain-info",
  TransactionStats = "txn-stats",
}

export interface GenerateURL {
  api?: API
  paths?: string[]
  chainId?: number
  param?: FetchParam
}

export interface FetchConfig extends SWRConfiguration {}

export interface FetchParam {
  [key: string]: string | number | boolean | null | undefined
}

export function generateUrl(param: GenerateURL): string {
  return concatUrl(configs.airTableApi, param)
}

function concatUrl(baseUrl: string, p: GenerateURL): string {
  const _p = concatParam(p.param)
  const params = _p && Array.from(_p).length > 0 ? `?${_p}` : ""
  const url = [baseUrl, configs.baseId, configs.tableId]
    .join("/")
    .replace(/\/+$/, "")
  return `${url}${params}`
}

function concatParam(param?: FetchParam) {
  if (!param) return undefined
  const p = new URLSearchParams()
  for (const [k, v] of Object.entries(param)) {
    if (v === "" || v === null || v === undefined) continue
    p.append(k, v.toString())
  }
  return p
}
