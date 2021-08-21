import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Asurraa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
        <h1 className="text-4xl text-red-400 font-semibold uppercase animate-bounce">Asurraa</h1>
        <iframe width='700' height="700" src="https://embed.lottiefiles.com/animation/70385"/>
        </div>
      </main>

      
    </div>
  )
}
