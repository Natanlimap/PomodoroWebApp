import Head from 'next/head'
import {GetServerSideProps} from 'next';

import {ExperienceBar} from '../components/ExperienceBar'
import {Countdown} from '../components/Countdown'

import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Sidebar } from '../components/Sidebar';


interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  username: string;

}

export default function Home(props : HomeProps) {
  

  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
      <Sidebar/>
      <div className={styles.container}>
        <ExperienceBar></ExperienceBar>
        <CountdownProvider>
          <section>
            <div>
              <Profile username={props.username} />
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const {level, currentExperience, challengesCompleted, username} = ctx.req.cookies;

  if(!username){
    return{
      redirect:{
        destination: '/login',
        permanent: false
      }
    }
  }
  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      username: username,
    }
  }
}