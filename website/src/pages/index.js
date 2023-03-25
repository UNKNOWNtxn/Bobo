import Head from 'next/head'
import Image from 'next/image'
import headgif from '../../public/assets/spinhead.gif'
import loading from '../../public/assets/loading.gif'
import BoboVision from '../../public/assets/BoboVision_V3.png'

export default function Home() {
  return (
    <>

      <Head>
        <title>Bobo</title>
        <meta name="description" content="Its all Bobo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='overflow-hidden'>
        <div class='bg-gray-300 flex flex-col items-center justify-center tv-border'>
        <Image className='mt-16' src={BoboVision} width={800} height={800}></Image>
          <div className='flex justify-around'>
            <Image className='' src={headgif} width={200} height={200}></Image>
            <Image className='' src={loading} width={500} height={400}></Image>
            <Image className='' src={headgif} width={200} height={200}></Image>
          </div>
        </div>
      </div>
    </>
  )
  
}
