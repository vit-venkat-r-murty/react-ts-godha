import type { Status } from '../../types/enums'

type StatusProps = {
   status: Status
}

export default function StatusCompoent({ status }: StatusProps) {
   return <span className={`badge ${status}`}>{status}</span>
}
