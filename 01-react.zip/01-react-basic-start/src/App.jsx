import Header from "./components/Headers"
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"
import { useState } from "react"
// ты хотела при выходе купить энергос


export default function App() {
  // тут задается динамика
  const [contentType, setContentType] = useState(null)

  return (
    <div>
      <Header /> {/* = <header></header> */}
      <main>
        <TeachingSection />
        <DifferencesSection contentType={contentType} setContentType={setContentType} />
      </main>
    </div>
  )
}
