import { SignedOut, SignInButton , SignOutButton, UserButton , SignedIn } from '@clerk/clerk-react'

const Home = () => {
  return (
    <div>
      <button className='btn btn-secondary'>Click Me</button>

      <SignedOut>
        <SignInButton mode='modal'>
            <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  )
}

export default Home
