'use client'

import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="bg-[#1F1E28] flex flex-col gap-4 text-zinc-200 p-8 h-[100vh]">
      <ul>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
        <li>Essa é uma página sinistra onde vão aparecer todos que estiverem cadastrados com o @Voldemort</li>
      </ul>

      <div className="p-4 mt-8 flex gap-6">
        <button onClick={() => redirect('/login')} className="currsor ponter text-[#2AA7FD] underline font-bold cursor-pointer hover:text-blue-500">Login?</button>
        <button onClick={() => redirect('/signup')} className="currsor ponter text-[#2AA7FD] underline font-bold cursor-pointer hover:text-blue-500">Register?</button>
      </div>
    </main>
  );
}
