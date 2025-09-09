import { Mail } from "./components/mail"
import { useMails } from "./hooks/useMails"

function App() {
  const { isLoading, resume, mails } = useMails()

  if (isLoading) return <div>Loading...</div>

  return <div className="mx-auto p-4">
    <div className="border rounded mb-4 p-4">
      <h2 className="text-2xl font-bold mb-4">Résumé du jour</h2>
      {resume}
    </div>
    <div className="border rounded p-4 mb-4">
      {mails.map(mail => <Mail key={mail.id} mail={mail} />)}
    </div>
  </div>
}

export default App
