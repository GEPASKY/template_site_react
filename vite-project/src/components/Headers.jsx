import { useState } from 'react'
import logo from '/logo-name.svg'


export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
      <header>
        <img src={logo} alt={'Result University'} />
        {/*<h3>Меня зовут Наталья!</h3>*/}
        <span>Время {now.toLocaleTimeString()}</span>
      </header>
    )
  }
  