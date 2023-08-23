import Link from "next/link";

export default function Page() {
    return <>
        Index Page
        <br />
        Navigating to the next page crashes the app
        <br />
        <Link href={'/a'}>Page A</Link>
    </>
}