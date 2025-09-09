import { useEffect, useState } from "react";

export type Mail = {
  id: string;
  subject: string;
  date: string;
  from: string;
}

type MailsFile = [
  {
    emails: Mail[];
  },
  {
    text: string;
  }
]

export function useMails() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [mails, setMails] = useState<Mail[]>([]);
  const [resume, setResume] = useState<string>("");

  useEffect(() => {
    fetch('/emails-today.json')
      .then(response => response.json())
      .then((data: MailsFile) => {
        setMails(data[0].emails);
        setResume(data[1].text);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [])

  return { isLoading, error, resume, mails };
}
