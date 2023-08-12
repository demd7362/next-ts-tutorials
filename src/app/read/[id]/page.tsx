import Link from "next/link";

export default async function Read({ params }: LayoutProps) {
    const response = await fetch(`http://localhost:9999/topics/${params.id}`,{
        cache: 'no-store'
    });
    const { title, body } = await response.json();
    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
        </>
    )
}