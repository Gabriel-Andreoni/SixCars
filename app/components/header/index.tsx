import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import SignInIcon from '../../../public/signin-icon.png';

export function Header() {
    return (
        <header className="w-full h-20 p-12 flex justify-between items-center bg-slate-950 text-white">
            <div>
                logo
            </div>
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/carros">
                            Carros
                        </Link>
                    </li>


                    <li>
                        <SignedIn>
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </SignedIn>
                    </li>

                    <li>
                        <SignedIn>
                            <div className="w-12 h-12 rounded-full border-white border-2 grid place-items-center">
                                <UserButton />
                            </div>
                        </SignedIn>
                        <SignedOut >
                            <SignInButton mode="modal">
                                <Image className="cursor-pointer" src={SignInIcon} width={32} height={32} alt="ícone de realizar login" />
                            </SignInButton>
                        </SignedOut>
                    </li>
                </ul>
            </nav>
        </header>
    )
}