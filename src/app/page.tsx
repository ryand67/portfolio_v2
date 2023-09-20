import { Analytics } from '@vercel/analytics/react';

import SocialLogo from './components/socialLogo';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedin.png';
import resumeLogo from './assets/resume.png';

export default function Home() {
  return (
    <main className="bg-black flex justify-center min-h-screen h-screen flex-col items-center p-24">
        <h1 className="text-8xl text-center font-mono">Ryan</h1>
        <h1 className="text-8xl text-center font-mono">Devenney</h1>
        <h4 className="text-xl font-mono">Backend Engineer | Vim Enthusiast</h4>
        <div className='flex flex-row justify-center items-center'>
            <SocialLogo href="https://www.github.com/ryand67" 
                logo={githubLogo}
                alt="GitHub"
            />
            <SocialLogo href="https://www.linkedin.com/in/ryandevenney67" 
                logo={linkedinLogo}
                alt="LinkedIn"
            />
            <SocialLogo href="RyanDevenney_Resume.pdf" 
                logo={resumeLogo}
                alt="LinkedIn"
            />
        </div>
        <Analytics mode='production' />
    </main>
  )
}
