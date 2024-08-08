import GitHubCalendar from 'react-github-calendar'
import './App.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

function App() {
    const { theme } = useTheme();
    return (
        <>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-10'>
                    <Avatar className='mt-10 mb-10'>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/88249309" />
                        <AvatarFallback>MRO</AvatarFallback>
                    </Avatar>
                </div>
                <div className='col-span-2 text-right'>
                    <ModeToggle />
                </div>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Hello, this is Rauf 👋🏻
            </h1>
            <blockquote className="mt-6 border-l-2 pl-6 italic flex-initial">
                Obi-Wan: Hello there.<br />
                General Grievous: General Kenobi..
            </blockquote>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 mb-6">
                Contributions
            </h2>
            <p className='text-sm text-muted-foreground'>mostly private projects</p>
            <div className="mt-6 mb-6">
                <GitHubCalendar showWeekdayLabels username="mehmetraufoguz" colorScheme={theme == "light" ? "light" : "dark"} />
            </div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 mb-6">
                Featured Projects
            </h2>
            <p className='text-sm text-muted-foreground'>ta-daa 🥳</p>
            <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <a href='https://github.com/Metatime-Technology-Inc/genesis-contracts' target='_blank'>
                        <img src={`https://github-readme-stats.vercel.app/api/pin/?username=Metatime-Technology-Inc&repo=genesis-contracts&theme=${theme}`} alt='genesis-contracts' />
                    </a>
                </div>
                <div>
                    <a href='https://github.com/Metatime-Technology-Inc/pool-contracts' target='_blank'>
                        <img src={`https://github-readme-stats.vercel.app/api/pin/?username=Metatime-Technology-Inc&repo=pool-contracts&theme=${theme}`} alt='pool-contracts' />
                    </a>
                </div>
            </div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 mb-6">
                Social Links
            </h2>
            <p className='text-sm text-muted-foreground'>i dont usually use them</p>
            <div className="mt-6 mb-6">
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li><a href='https://github.com/mehmetraufoguz' target='_blank'>Github</a></li>
                    <li><a href='https://www.linkedin.com/in/mehmetraufoguz' target='_blank'>Linkedin</a></li>
                    <li><a href='https://t.me/mehmetraufoguz' target='_blank'>Telegram</a></li>
                    <li><a href='https://www.instagram.com/mehmetraufoguz' target='_blank'>Instagram</a></li>
                </ul>
            </div>
        </>
    )
}

export default App
