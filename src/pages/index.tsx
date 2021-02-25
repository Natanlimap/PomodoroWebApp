import Head from 'next/head'
import { CompletedChalleges } from '../components/CompletedChalleges'
import {ExperienceBar} from '../components/ExperienceBar'
import {Countdown} from '../components/Countdown'

import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'


export default function Home() {
  return (
    <div className={styles.container}>
    
      <ExperienceBar></ExperienceBar>
      <CountdownProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChalleges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
