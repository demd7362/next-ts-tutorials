"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';


export default function Update({ params }: LayoutProps) {
    const [topic, setTopic] = useState<Topic>({
        title: '',
        body: ''
    });
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:9999/topics/${params.id}`);
            const newTopic = await response.json();
            setTopic(newTopic);
        }
        fetchData();
    }, [])
    return (
        <>
            <form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                console.log(params.id)
                const response = await fetch(`http://localhost:9999/topics/${params.id}`, {
                    method: 'put',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(topic)
                })
                const updatedTopic = await response.json();
                setTopic(updatedTopic);
                router.refresh();
                router.push(`/read/${updatedTopic.id}`);
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
                    <textarea name="body" value={topic.body} placeholder="body" onChange={e => {
                        setTopic((prev: Topic) => {
                            return {
                                ...prev,
                                body: e.target.value
                            }
                        })
                        console.log(topic)
                    }} />
                </p>
                <input type="submit" value="update" />
            </form>
        </>
    )
}