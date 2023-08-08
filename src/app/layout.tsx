import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Web tutorials',
  description: 'created by me!',
}


const element: string[] = ["html", "css", "javascript"];

export default async function RootLayout({ children }: LayoutProps) {
  const response = await fetch('http://localhost:9999/topics');
  const topics = await response.json();
  return (
    <html>
      <body>
        <h1>
          <a href="/">WEB</a>
        </h1>
        <ol>
          {topics.map((topic: Topic) => {
            const url = "/read/" + topic.id;
            return (<li key={topic.id}>
              <Link href={url}>{topic.title}</Link>
              <p>{topic.body}</p>
            </li>)
          })}
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="Delete" />
          </li>
        </ul>

      </body>
    </html>
  )
}
