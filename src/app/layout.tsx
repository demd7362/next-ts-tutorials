import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Menu from './Menu';

export const metadata: Metadata = {
  title: 'Web tutorials',
  description: 'created by me!',
}


export default async function RootLayout({ children, params }: LayoutProps) {
  const response = await fetch(`${process.env.API_URL}/topics`, {
    // next: {
    //   revalidate: 10
    // }
    cache: 'no-store',
  });
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
        <Menu />
      </body>
    </html>
  )
}
