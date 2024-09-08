import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
                <Link to="#" className="flex items-center justify-center" >
                    <BirdIcon className="h-6 w-6" />
                    <span className="sr-only">XYZ Cricket Organization</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link to="/schedule" className="text-sm font-medium hover:underline underline-offset-4" >
                        Schedule
                    </Link>
                    <Link to="/trivia" className="text-sm font-medium hover:underline underline-offset-4" >
                        Trivia
                    </Link>
                    <Link to="/register" className="text-sm font-medium hover:underline underline-offset-4" >
                        Register
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar

function BirdIcon(props) {
    return (
        <Link to="/">
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 7h.01" />
                <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
                <path d="m20 7 2 .5-2 .5" />
                <path d="M10 18v3" />
                <path d="M14 17.75V21" />
                <path d="M7 18a6 6 0 0 0 3.84-10.61" />
            </svg>
        </Link>
    )
}