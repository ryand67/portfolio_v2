import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type SocialProps = {
    href: string;
    extraClass?: string;
    logo: StaticImageData;
    alt: string;
    logoHw?: number | null;
}

export default function SocialLogo({ href, extraClass, logo, alt, logoHw }: SocialProps) {
    return (
    <Link href={href} target='_blank'>
        <Image className={`p-3 mx-2 ${extraClass} hover:bg-opacity-20 hover:bg-zinc-50 hover:rounded h-[65px] w-[65px] sm:h-[75px] sm:w-[75px]`} 
            src={logo} 
            alt={alt} 
        />
    </Link>
   )
}
