'use client'

import SocialLogo from './components/socialLogo';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedin.png';
import resumeLogo from './assets/resume.png';
import { useMobile } from './hooks/useMobile'

export default function Home() {
    const isMobile = useMobile();

    return (
        <main className="bg-black flex justify-center min-h-screen h-screen flex-col items-center p-24">
            <h1 className="text-6xl text-center font-mono sm:text-8xl">Ryan</h1>
            <h1 className="text-6xl text-center font-mono sm:text-8xl">Devenney</h1>
            <h4 className="hidden font-mono text-xl sm:flex">Backend Engineer | Vim Enthusiast</h4>
            <div className='flex flex-col items-center text-center sm:hidden'>
                <h4>Backend Engineer</h4>
                <hr className='w-1/6 my-2'/>
                <h4>Vim Enthusiast</h4>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <SocialLogo href="https://www.github.com/ryand67" 
                    logo={githubLogo}
                    alt="GitHub"
                    logoHw={isMobile ? 55 : null}
                />
                <SocialLogo href="https://www.linkedin.com/in/ryandevenney67" 
                    logo={linkedinLogo}
                    alt="LinkedIn"
                    logoHw={isMobile ? 55 : null}
                />
                <SocialLogo href="RyanDevenney_Resume.pdf" 
                    logo={resumeLogo}
                    alt="LinkedIn"
                    logoHw={isMobile ? 55 : null}
                />
            </div>
        </main>
  )
}
