import { Link } from "react-router-dom"
export default function Trivia() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="grid gap-4">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Cricket Trivia</h1>
                        <p className="text-lg md:text-xl">
                            Test your knowledge of the sport with our fun and challenging trivia questions.
                        </p>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 py-10 px-4 md:px-6">
                    <div className="flex flex-col gap-6">
                        <div className="bg-background rounded-lg border p-4">
                            <h3 className="text-lg font-semibold mb-4">Trivia Categories</h3>
                            <div className="grid gap-4">
                                <div>
                                    <label htmlFor="trivia-category" className="mb-2 block">
                                        select a Category
                                    </label>
                                    <select id="trivia-category" defaultValue="all" className="px-2 py-1 rounded-sm border-2">
                                        <option value="all">All</option>
                                        <option value="history">History</option>
                                        <option value="players">Players</option>
                                        <option value="rules">Rules</option>
                                        <option value="tournaments">Tournaments</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="trivia-difficulty" className="mb-2 block">
                                        Difficulty Level
                                    </label>
                                    <select id="trivia-difficulty" defaultValue="all" className="px-2 py-1 rounded-sm border-2">
                                        <option value="all">All</option>
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background rounded-lg border p-4">
                            <label htmlFor="search" className="mb-2 block">
                                Search Trivia
                            </label>
                            <input id="search" placeholder="Search trivia questions..." className="px-2 py-1 rounded-sm border-2" />
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="bg-background rounded-lg border p-4">
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                                        <PuzzleIcon className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Cricket Trivia Challenge</h2>
                                        <p className="text-muted-foreground">
                                            Test your knowledge of the sport with our fun and challenging trivia questions.
                                        </p>
                                    </div>
                                </div>
                                <button className="border-2 rounded-full">Start Trivia</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="border-2 rounded-xl p-5">
                                <div className="grid gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">Cricket History</h3>
                                        <p className="text-muted-foreground">Questions about the origins and evolution of cricket.</p>
                                    </div>
                                    <Link to="/playtrivia/cricketHistory"className="border-2 rounded-full">Play Trivia</Link>
                                    {/* <button className="border-2 rounded-full">Play Trivia</button> */}
                                </div>
                            </div>
                            <div className="border-2 rounded-xl p-5">
                                <div className="grid gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">Cricket Players</h3>
                                        <p className="text-muted-foreground">
                                            Test your knowledge of famous cricketers and their achievements.
                                        </p>
                                    </div>
                                    <Link to="/playtrivia/cricketPlayers"className="border-2 rounded-full">Play Trivia</Link>
                                    {/* <button className="border-2 rounded-full">Play Trivia</button> */}
                                </div>
                            </div>
                            <div className="border-2 rounded-xl p-5">
                                <div className="grid gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">Cricket Rules</h3>
                                        <p className="text-muted-foreground">Questions about the laws and regulations of the sport.</p>
                                    </div>
                                    <Link to="/playtrivia/cricketRules"className="border-2 rounded-full">Play Trivia</Link>
                                    {/* <button className="border-2 rounded-full">Play Trivia</button> */}
                                </div>
                            </div>
                            <div className="border-2 rounded-xl p-5">
                                <div className="grid gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">Cricket Tournaments</h3>
                                        <p className="text-muted-foreground">
                                            Test your knowledge of major cricket tournaments and events.
                                        </p>
                                    </div>
                                    <Link to="/playtrivia/cricketTournaments"className="border-2 rounded-full">Play Trivia</Link>
                                    {/* <button className="border-2 rounded-full">Play Trivia</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function PuzzleIcon(props) {
    return (
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
            <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
        </svg>
    )
}