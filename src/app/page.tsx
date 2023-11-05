import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-100">
      <div className="max-w-5xl w-full min-h-screen flex flex-col items-center justify-center ">
        <div className="flex  items-center justify-center w-[256px] h-[256px] rounded-lg border bg-white">
          <div className="flex flex-col">
            <Image
              src="/assets/agula-logo.png"
              alt="Agula Logo"
              width={128}
              height={128}
              priority
            />
            <div className="text-2xl mt-6 text-center text-[#3b566b]">
              Agula
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className="text-xl text-center text-[#3b566b]">Contact</div>
          <a href="mailto:othy.tenk@gmail.com" className="text-neutral-500">
            othy.tenk@gmail.com
          </a>
        </div>

        <div className="flex flex-col mt-8">
          <a href="https://agula.xyz" className="text-sm text-neutral-400">
            agula.xyz
          </a>
        </div>
      </div>
    </main>
  );
}
