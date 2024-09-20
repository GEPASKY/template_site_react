import WayToTeach from "./WayToTeach"
import { ways } from '../data'


export default function TeachingSection() {
    return (
        <section>
          <h3>Наш план обучения</h3>
          <ul>
            {/*<WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />*/}
            {ways.map(way => <WayToTeach key={way.title} {...way} />)}

          </ul>
        </section>
    )
}