import Head from 'next/head'
import Image from 'next/image'
import headgif from '../../public/assets/spinhead.gif'
import tvborder from '../../public/assets/tvborder.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>Bobo</title>
        <meta name="description" content="Its all Bobo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='bg-black bg-cover'>
        <Image src={tvborder}></Image>
      </div> */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-no-repeat bg-center bg-cover">
            <Image src={tvborder}></Image>
          </div>
        </div>
      </div>
    </>
  )
}
