import type { Mail } from "@/hooks/useMails"
import { Badge } from "./ui/badge"

type MailProps = {
  mail: Mail
}

export function Mail({ mail }: MailProps) {
  const time = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(mail.date));

  return <div className="rounded mb-4">
    <div className="flex justify-between items-start mb-0.5">
      <h2 className="text-xl font-bold mb-1">{mail.subject}</h2>
      <Badge>{time}</Badge>
    </div>
    <p className="text-gray-600 break-words">From: {mail.from}</p>
  </div>
}
