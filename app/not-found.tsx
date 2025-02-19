import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center text-white gap-3'>
      <Image 
      src={"/logo/logoTNS-white.png"}
      width={250}
      height={100}
      alt="Logo blanc de l'application"
      className=''
      />
      <h2>Erreur 404: Cette page est sorti du parking </h2>
      <p>Nos développeurs sont sur le coup... ou peut-être pas. <FontAwesomeIcon icon={faTruck} /></p>
      <Link href="/">Page d&apos;accueil</Link>
    </div>
  )
}