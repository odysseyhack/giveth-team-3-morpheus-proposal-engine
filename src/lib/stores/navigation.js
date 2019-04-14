import { Store } from 'laco'
import berchain from '../assets/images/berchain.jpg'
import liftoff from '../assets/images/liftoff.jpg'
import rewild4good from '../assets/images/rewild4good.jpg'
import unchain from '../assets/images/unchain.jpg'

const milestones = [
  {
    title: 'Raise Funds for Reclamation',
    description:
      'Once we have raised 400,000 xDAI we will kick off the project. This will allow us to build the team and do the planning work required to achieve further milestones',
    amount: '40,000 xDAI',
  },
  {
    title: 'Purchase the Land',
    description:
      'Gather permits, agree to a purchasing agreement and take all the other necessary steps needed to secure the property for reclamation before receiving the 1 needed to purchase the land.',
    amount: '160,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 3 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang recipe for 6 months',
    description:
      'Gather permits, agree to a purchasing agreement and take all the other necessary steps needed to secure the property for reclamation before receiving the 1 needed to purchase the land.',
    amount: '20,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 9 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 12 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '30,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 15 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 15 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 15 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 15 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 18 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '20,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 21 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 24 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '30,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 27 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '20,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 30 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 33 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '10,000 xDAI',
  },
  {
    title: 'Follow Masarang Recipe for 36 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    amount: '20,000 xDAI',
  },
]

export const NavStore = new Store({
  state: 'commons',
  campaigns: [
    {
      title: 'Reforest Large Sugar Palm Plantation in Borneo',
      description:
        'An old palm oil farm has just been foreclosed on by the bank and our organization has the opportunity to execute one of Masarang’s recipes.',
      giversCount: 0,
      donationsCount: 0,
      image: rewild4good,
    },
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
