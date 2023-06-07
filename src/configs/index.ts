interface Configurations {
  baseId: string
  tableId: string
  token: string
  airTableApi: string
}

export const configs: Configurations = {
  baseId: process.env.NEXT_PUBLIC_AIR_TABLE_BASE_ID ?? "",
  tableId: process.env.NEXT_PUBLIC_AIR_TABLE_TABLE_ID ?? "",
  token: process.env.NEXT_PUBLIC_AIR_TABLE_TOKEN ?? "",
  airTableApi: process.env.NEXT_PUBLIC_AIR_TABLE_BASE_API ?? "",
}
