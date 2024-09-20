import Header from "./components/Headers"
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import React, { useState } from 'react'; // Не забудьте импортировать useState


export default function App() {
  const [tab, setTab] = useState('main')
  return (
    <>
      <Header /> {/* = <header></header> */}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        { tab == 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        

        { tab == 'feedback' && <FeedbackSection /> }
      </main>
    </>
  )
}
