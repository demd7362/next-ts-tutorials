'use client'

import { useRouter } from "next/navigation";
export default function Create() {
const router = useRouter();
    return (
        <form onSubmit={async (e: any) => {
            e.preventDefault();
            const title: string = e.target.title.value;
            const body: string = e.target.body.value;
            const response = await fetch('http://localhost:9999/topics', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    body,
                })
            });
            const result = await response.json();
            router.push(`/read/${result.id}`);
        }}>
            <p>
                <input type="text" name="title" placeholder="title" />
            </p>
            <p>
                <textarea name="body" placeholder="body" />
            </p>
            <input type="submit" value="create" />
        </form >
    )
}