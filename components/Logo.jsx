import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none">
            <div>
                <h1 className="text-3xl font-bold">Rhyth<span className="text-primary">mify</span></h1>
            </div>
        </Link>
    )
}