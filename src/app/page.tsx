import { getServerAuthSession } from "src/server/auth";
import Authentication from "./_components/authentication";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Third <span className="text-emerald-500">Eye</span>
        </h1>
        <div className="flex flex-col items-center gap-2">
          <Authentication session={session} />
        </div>
      </div>
    </main>
  );
}
