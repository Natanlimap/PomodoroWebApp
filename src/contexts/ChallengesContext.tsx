import {createContext, ReactNode, useState} from 'react'
import challenges from '../../challenges.json'

interface ChallengesProviderProps{
    children: ReactNode;
}

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenges: () => void;
    cancelChallenge: () => void;
    completedChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children} : ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [levelExperince, setLevelExperience] = useState(100);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const [experienceToNextLevel, setExperienceToNextLevel] = useState(Math.pow((level + 1) * 4, 2))


    function levelUp(){
      setLevel(level+1);
    }

    function startNewChallenges(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    function completedChallenge(){
  
    }
    function cancelChallenge(){
        setActiveChallenge(null);
    }
  
    return (
        <ChallengesContext.Provider
         value={
             {
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                completedChallenge,
                cancelChallenge,
                levelUp,
                startNewChallenges
            }
             }>
            {children}
        </ChallengesContext.Provider>
    )
}