import { GangabonAddress } from "@/configs/contracts"
import { Gangabon__factory } from "@/typechain"
import { Vote } from "@/types/vote"
import { ethers } from "ethers"
import { useCallback, useMemo } from "react"

export const useGangabon = (signer: ethers.Signer) => {
  const gangabonContract = useMemo(() => {
    if (!signer) return
    return Gangabon__factory.connect(GangabonAddress, signer)
  }, [signer])

  const vote = useCallback(
    async (applicationId: number, vote: Vote) => {
      return await gangabonContract?.vote(applicationId, vote)
    },
    [gangabonContract, signer]
  )

  const getApplication = useCallback(
    async (applicationId: number) => {
      return await gangabonContract?.applications(applicationId)
    },
    [gangabonContract, signer]
  )

  const getIsVote = useCallback(
    async (applicationId: number) => {
      return await gangabonContract?.addressVoted(
        signer.getAddress(),
        applicationId
      )
    },
    [gangabonContract, signer]
  )

  const getDMRVs = useCallback(async () => {
    const totalSupply = await gangabonContract?.tokenId()
    if (!totalSupply) return []
    const dmrvs = []
    for (let i = 0; i < totalSupply?.toNumber(); i++) {
      const cid = await gangabonContract?.tokenIdToCid(i)
      dmrvs.push({
        cid,
        tokenId: i,
        totalSupply: 100,
      })
    }
    return dmrvs
  }, [gangabonContract, signer])

  return { vote, getApplication, getIsVote, getDMRVs }
}
