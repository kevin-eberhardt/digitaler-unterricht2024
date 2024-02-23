import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Digitaler Unterricht</h1>
        <nav>
            <ul className="flex space-x-4">
            <li>
                <Link href="/">
                Home
                </Link>
            </li>
            <li>
                <Link href="/about">
                About
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    }