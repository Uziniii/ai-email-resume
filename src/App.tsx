import { useMemo, useState } from "react"
import { Mail } from "./components/mail"
import { Input } from "./components/ui/input"
import { useMails } from "./hooks/useMails"

function App() {
  const [search, setSearch] = useState("")
  const { isLoading, error, resume, mails } = useMails()

  const filteredMails = useMemo(() => {
    if (!search) return mails
    return mails.filter(mail =>
      mail.subject.toLowerCase().includes(search.toLowerCase()) ||
      mail.from.toLowerCase().includes(search.toLowerCase())
    )
  }, [mails, search])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>
    <p>Make sure that your emails-today.json is placed in the public directory</p>
    <p >
      Error: {error.message}
    </p>
  </div>

  return <div className="mx-auto flex flex-col">
    <div className="border rounded p-4 m-4 mb-0">
      <h2 className="text-2xl font-bold mb-4">Résumé du jour</h2>
      {resume}
    </div>
    <header className="sticky top-0 p-4 bg-background/50 backdrop-blur-xl">
      <Input className="rounded" placeholder="Search in mails" onChange={(e) => setSearch(e.target.value)} value={search} />
    </header>
    <div className="border rounded p-4 m-4 mt-0">
      {filteredMails.map((mail, i, array) =>
        <Mail key={mail.id} mail={mail} isLast={i === array.length - 1} />
      )}
    </div>
  </div>
}

export default App
