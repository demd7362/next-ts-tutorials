'use client'

import { useRouter } from "next/navigation";
import { useState } from 'react';
export default function Create() {
    const router = useRouter();
    const [topic, setTopic] = useState<Topic>({
        body: '',
        title: ''
    });
    return (
        <form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(topic)
            });
            const result = await response.json();
            router.refresh();
            router.push(`/read/${result.id}`);
        }}>
            <p>
                <input type="text" name="title" value={topic.title} placeholder="title" onChange={e => {
                    setTopic((prev: Topic) => {
                        return {
                            ...prev,
                            title: e.target.value
                        }
                    })
                }} />
            </p>
            <p>
                <textarea name="body" placeholder="body" value={topic.body} onChange={e => {
                    setTopic((prev: Topic) => {
                        return {
                            ...prev,
                            body: e.target.value
                        }
                    })
                }} />
            </p>
            <input type="submit" value="create" />
        </form >
    )
}