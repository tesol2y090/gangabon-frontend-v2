import { configs } from "@/configs"
import { useEffect, useState } from "react"
import type { SWRConfiguration } from "swr"
import useSWR from "swr"
import useSWRImmutable from "swr/immutable"

async function fetcher(url: string) {
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${configs.token}` },
    })
    if (res.status === 200) {
      return await res.json()
    }
    throw res.status
  } catch (e) {
    throw e
  }
}

function useSWRFetch<T>(url: string, config?: SWRConfiguration) {
  return useSWR<T>(url, fetcher, config)
}

function useSWRImmutableFetch<T>(url: string) {
  return useSWRImmutable<T>(url, fetcher)
}

function useFetch<T>(url: string) {
  const [data, setData] = useState<T>()

  useEffect(() => {
    if (!url) return
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d))
  }, [url])

  return { data }
}

export { useSWRFetch, useSWRImmutableFetch, useFetch }
