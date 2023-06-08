import { ApplicationStatus } from "@/types/vote"

export const mapStatusToText = (status: ApplicationStatus) => {
  switch (status) {
    case ApplicationStatus.Voting:
      return "Voting"
    case ApplicationStatus.Rejected:
      return "Rejected"
    case ApplicationStatus.Complete:
      return "Complete"
    default:
      break
  }
}

export const getIFPSLink = (cid: string) => {
  return `https://${cid}.ipfs.w3s.link/`
}
