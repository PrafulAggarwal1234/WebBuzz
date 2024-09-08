import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full h-[100vh] py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground bg-black flex items-center">
          <div className="container px-4 md:px-6">
            <div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to XYZ Cricket Organization
                  </h1>
                  <p className="text-secondary-foreground md:text-xl">
                    Discover the thrill of cricket tournaments and join our community of passionate players and fans.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row m-auto">
                  <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                  >
                    Upcoming Events
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Tournament Formats</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From T20 to Test matches, we offer a variety of tournament formats to cater to all cricket
                  enthusiasts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">T20 Tournament</h3>
                      <p className="text-muted-foreground">Fast-paced action with each team batting for 20 overs.</p>
                      <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                      >
                        Learn More
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">ODI Tournament</h3>
                      <p className="text-muted-foreground">One-day international format with 50 overs per team.</p>
                      <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                      >
                        Learn More
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Test Tournament</h3>
                      <p className="text-muted-foreground">
                        The ultimate test of cricketing skills with 5-day matches.
                      </p>
                      <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                      >
                        Learn More
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/cric_format.jpg"

                alt="Cricket Formats"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Matches and Results</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up-to-date with the latest tournament schedules and results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Upcoming Matches</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between rounded-md bg-background p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <BirdIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">XYZ vs ABC Cricket Club</p>
                          <p className="text-sm text-muted-foreground">June 15, 2023 - 2:00 PM</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                      >
                        View Details
                      </Link>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-background p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <BirdIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">PQR vs XYZ Cricket Club</p>
                          <p className="text-sm text-muted-foreground">June 22, 2023 - 3:00 PM</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Recent Results</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between rounded-md bg-background p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <BirdIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">XYZ Cricket Club vs ABC Cricket Club</p>
                          <p className="text-sm text-muted-foreground">June 10, 2023 - Result: XYZ won by 5 wickets</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                      >
                        View Scorecard
                      </Link>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-background p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary p-2 text-primary-foreground">
                          <BirdIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">PQR Cricket Club vs XYZ Cricket Club</p>
                          <p className="text-sm text-muted-foreground">June 5, 2023 - Result: PQR won by 8 wickets</p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                      >
                        View Scorecard
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Test Your Cricket Knowledge</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Participate in our cricket trivia and compete with other enthusiasts.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <input type="text" placeholder="Enter your name" className="max-w-lg px-3 py-2 border-2 border-black rounded-sm" />
                  <button type="submit" className=" bg-black px-3 py-2 text-white rounded-sm hover:bg-gray-900 transition-all hover:transition-all">Start Trivia</button>
                </form>
                <p className="text-xs text-muted-foreground">Test your cricket knowledge and win exciting prizes.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Cricket Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BirdIcon(props) {
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
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  )
}