import type { Mail as MailType } from "@/hooks/useMails"
import { Badge } from "./ui/badge"
import React, { useMemo } from "react"
import { Separator } from "./ui/separator"

type MailProps = {
  mail: MailType
  isLast: boolean
}

export const Mail = React.memo(function Mail({ mail, isLast }: MailProps) {
  const [date, time, isToday] = useMemo(() => {
    const now = new Date();
    const date = new Date(mail.date);

    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const time = new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(date);

    const todayDate = new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);

    return [todayDate, time, isToday];
  }, [mail])

  return <div className="rounded mb-4">
    <div className="flex justify-between items-start mb-0.5 gap-2">
      <h2 className="text-xl font-bold mb-1 flex">{mail.subject}</h2>
      <div className="flex flex-col gap-1">
        {isToday ? <Badge>{time}</Badge> : <>
          <Badge>{date}</Badge>
          <Badge>{time}</Badge>
        </>}
      </div>
    </div>
    <p className="text-gray-600 break-words">From: {mail.from}</p>
    {!isLast && <Separator className="mt-4" />}
  </div>
})
