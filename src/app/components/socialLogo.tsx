import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type SocialProps = {
    href: string;
    extraClass?: string;
    logo: StaticImageData;
    alt: string
}

export default function SocialLogo({ href, extraClass, logo, alt }: SocialProps) {
    const logoHW = 65;

    return (
    <Link href={href} target='_blank'>
        <Image className={`p-3 mx-2 ${extraClass} hover:bg-opacity-20 hover:bg-zinc-50 hover:rounded`} 
            src={logo} 
            alt={alt} 
            width={logoHW} 
            height={logoHW}
        />
    </Link>
   )
}
