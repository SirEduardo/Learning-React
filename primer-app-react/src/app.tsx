import './app.css'
import { TwitterFollowCard } from './TwitterFollowCards.tsx'


export function App () {
   return(
    <section className='App'>
    <TwitterFollowCard  userName="elonmusk" name="Elon Musk"/>
    <TwitterFollowCard  userName="RocaOner" name="Miguel Riconudo"/>
    <TwitterFollowCard  userName="ceskmcfran" name="Francisco Blazquez"/>
    <TwitterFollowCard  userName="Sr_Eduardo96" name="Eduardo Sanchez"/>
    </section>
   )
}