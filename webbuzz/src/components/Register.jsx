import { useState } from 'react';
import TournamentDetails from './TournamentDetails';

export default function Register() {
  // State for managing selected tournament
  const [selectedTournament, setSelectedTournament] = useState('t20');

  // Handle tournament change
  const handleTournamentChange = (e) => {
    setSelectedTournament(e.target.value);
  };

  // Get details for the selected tournament

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Register for XYZ Cricket Tournaments
                  </h1>
                  <p className="max-w-[600px] text-secondary-foreground md:text-xl">
                    Join our community of passionate cricket players and fans.
                  </p>
                </div>
                <form className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="tournament">Tournament</label>
                    <select
                      id="tournament"
                      className="px-3 py-2 rounded-sm text-black"
                      value={selectedTournament}
                      onChange={handleTournamentChange}
                    >
                      <option value="t20">T20 Tournament</option>
                      <option value="odi">ODI Tournament</option>
                      <option value="test">Test Tournament</option>
                    </select>
                  </div>
                  <TournamentDetails selectedTournament={selectedTournament} />
                  <div className='grid grid-cols-2 gap-3'>
                    <div className="grid gap-2">
                      <label htmlFor="team-name">Team Name</label>
                      <input
                        id="team-name"
                        className="px-3 py-2 rounded-sm"
                        type="text"
                        placeholder="Enter your team name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="city">City</label>
                      <input
                        id="city"
                        className="px-3 py-2 rounded-sm"
                        type="text"
                        placeholder="Enter your city"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        className="px-3 py-2 rounded-sm"
                        type="text"
                        placeholder="Enter your Email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        className="px-3 py-2 rounded-sm"
                        type="text"
                        placeholder="Enter your Phone Number"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid gap-2">
                      <label htmlFor="player-1">Player 1 (Captain)</label>
                      <input
                        id="player-1"
                        type="text"
                        className="px-3 py-2 rounded-sm"
                        placeholder="Enter captain name"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className="grid gap-2">
                          <label htmlFor={`player-${i + 2}`}>Player {i + 2}</label>
                          <input
                            id={`player-${i + 2}`}
                            type="text"
                            className="px-3 py-2 rounded-sm"
                            placeholder={`Enter player ${i + 2} name`}
                          />
                        </div>
                      ))}
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="grid gap-2">
                          <label htmlFor={`extra-player-${i + 1}`}>Extra Player {i + 1}</label>
                          <input
                            id={`extra-player-${i + 1}`}
                            type="text"
                            className="px-3 py-2 rounded-sm"
                            placeholder={`Enter extra player ${i + 1} name`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="mt-2 bg-black text-white w-40 text-center block m-auto p-3 rounded-sm">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
