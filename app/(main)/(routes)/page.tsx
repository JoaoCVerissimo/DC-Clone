import { ModeToggle } from '@/components/mode-togge'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  )
}
