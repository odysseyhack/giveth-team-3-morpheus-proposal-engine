import { Store } from 'laco'
import berchain from '../assets/images/berchain.jpg'
import campaign from '../assets/images/campaign.jpg'
import liftoff from '../assets/images/liftoff.jpg'
import milestone from '../assets/images/milestone.jpg'
import rewild4good from '../assets/images/rewild4good.jpg'
import unchain from '../assets/images/unchain.jpg'

const milestones = [
  {
    title: 'Submit 6 Soil Samples to Ocean Protocol as a PoC Revenue Stream',
    description:
      'Hello! I am a PhD student doing research analysis of soil bacterial composition, I love your project and would like to contribute in a couple ways. First I would like take soil samples at the month every month for the next 4 years to track the ratios of different species of bacteria and how they relate to the different species of flora and fauna that are able to thrive as a Palm Oil Plantation is reforested. This data has value and I would like to help Masarang Foundation begin to use Ocean Protocol by doing a case study with software. I will go take the samples and analyze the bacterial makeup then submit that data to Ocean Protocol and donate the ownership of this data to Masarang Foundation. This way Masarang can improve their models and profit from sharing their data with other researchers. This milestone is for submitting the first 6 months of soil samples, it will be considered complete once all of the data is on Ocean and the asset is transferred to the Masarang Foundation. Update: Despite not receiving enough funding in this milestone. I have submitted the first months data:',
    maxValue: 40000,
    currentValue: 10000,
    image: milestone,
  },
  {
    title: 'Raise Funds for Reclamation',
    description:
      'Once we have raised 400,000 xDAI we will kick off the project. This will allow us to build the team and do the planning work required to achieve further milestones',
    maxValue: 40000,
    currentValue: 5000,
  },
  {
    title: 'Purchase the Land',
    description:
      'Gather permits, agree to a purchasing agreement and take all the other necessary steps needed to secure the property for reclamation before receiving the 1 needed to purchase the land.',
    maxValue: 160000,
    currentValue: 20000,
  },
  {
    title: 'Follow Masarang Recipe for 3 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 10000,
  },
  {
    title: 'Follow Masarang recipe for 6 months',
    description:
      'Gather permits, agree to a purchasing agreement and take all the other necessary steps needed to secure the property for reclamation before receiving the 1 needed to purchase the land.',
    maxValue: 20000,
  },
  {
    title: 'Follow Masarang Recipe for 9 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 10000,
  },
  {
    title: 'Follow Masarang Recipe for 12 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 30000,
  },
  {
    title: 'Follow Masarang Recipe for 15 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 10000,
  },
  {
    title: 'Follow Masarang Recipe for 18 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 20000,
  },
  {
    title: 'Follow Masarang Recipe for 21 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 10000,
  },
  {
    title: 'Follow Masarang Recipe for 24 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 30000,
  },
  {
    title: 'Follow Masarang Recipe for 27 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 20000,
  },
  {
    title: 'Follow Masarang Recipe for 30 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 10000,
  },
  {
    title: 'Follow Masarang Recipe for 33 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 10000,
  },
  {
    title: 'Follow Masarang Recipe for 36 months',
    description:
      'Following the work outlined by putting in the inputs for the recipe: soil type, altitude, climate zones, species, interaction of species with environmental conditions and other species , check jobs needed (level of unemployment), cultures, tribes & characteristics (how they live, nomadic etc) species characteristics - growth (how fast), role it plays in the ecosystem.',
    maxValue: 20000,
  },
]

const campaigns = [
  {
    title: 'Reforest Large Sugar Palm Plantation in Borneo',
    description:
      'An old palm oil farm has just been foreclosed on by the bank and our organization has the opportunity to execute one of Masarang’s recipes.',
    giversCount: 43,
    donationsCount: 40000,
    image: campaign,
    milestones,
  },
  {
    title: 'Team ReWild4Good',
    description:
      'At ReWild4Good we are working on a solution for gathering and generating optimal sustainable land regeneration recipes supporting local communities, Flora and Fauna.',
    giversCount: 2,
    donationsCount: 100,
    image: rewild4good,
    milestones: [],
  },
  {
    title: 'Team LiftOff',
    description:
      'At team Liftoff we are empowering communities by using satellite, AI and blockchain technologies.',
    giversCount: 5,
    donationsCount: 200,
    image: liftoff,
    milestones: [],
  },
  {
    title: 'Team BerChain',
    description:
      'We are building a social batch based on validated data that shows the social impact of a donations.',
    giversCount: 12,
    donationsCount: 500,
    image: berchain,
    milestones: [],
  },
  {
    title: 'Team FOREST',
    description:
      'Team UnChain is creating an open platform to facilitate reforestation projects from funding to implementation, providing full transparency and increasing the number of successful reforestation initiatives.',
    giversCount: 7,
    donationsCount: 50,
    image: unchain,
    milestones: [],
  },
]

export const NavStore = new Store({
  state: 'commons',
  showWallet: false,
  campaignIndex: 0,
  milestoneIndex: 0,
  campaigns,
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

export const toggleWallet = () =>
  NavStore.set(() => {
    return { showWallet: !NavStore.get().showWallet }
  })

export const changeCampaign = index =>
  NavStore.set(() => {
    return { campaignIndex: index }
  })

export const changeMilestone = index =>
  NavStore.set(() => {
    return { milestoneIndex: index }
  })

window.onpopstate = e => {
  replaceState(e.state.state)
}
