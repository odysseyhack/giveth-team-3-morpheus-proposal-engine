import { Store } from 'laco'
import berchain from '../assets/images/berchain.jpg'
import liftoff from '../assets/images/liftoff.jpg'
import rewild4good from '../assets/images/rewild4good.jpg'
import unchain from '../assets/images/unchain.jpg'

export const NavStore = new Store({
  state: 'commons',
  campaigns: [
    {
      title: 'Team ReWild4Good',
      description:
        'At ReWild4Good we are working on a solution for gathering and generating optimal sustainable land regeneration recipes supporting local communities, Flora and Fauna.',
      giversCount: 0,
      donationsCount: 0,
      image: rewild4good,
    },
    {
      title: 'Team LiftOff',
      description:
        'At team Liftoff we are empowering communities by using satellite, AI and blockchain technologies.',
      giversCount: 0,
      donationsCount: 0,
      image: liftoff,
    },
    {
      title: 'Team BerChain',
      description:
        'We are building a social batch based on validated data that shows the social impact of a donations.',
      giversCount: 0,
      donationsCount: 0,
      image: berchain,
    },
    {
      title: 'Team FOREST',
      description:
        'Team UnChain is creating an open platform to facilitate reforestation projects from funding to implementation, providing full transparency and increasing the number of successful reforestation initiatives.',
      giversCount: 0,
      donationsCount: 0,
      image: unchain,
    },
  ],
})
window.history.pushState({ state: 'commons' }, '', 'commons')
export const changeState = newState =>
  NavStore.set(() => {
    window.history.pushState({ state: newState }, '', newState)

    return { state: newState }
  })

export const replaceState = newState =>
  NavStore.set(() => {
    window.history.replaceState({ state: newState }, '', newState)

    return { state: newState }
  })

window.onpopstate = e => {
  replaceState(e.state.state)
}
