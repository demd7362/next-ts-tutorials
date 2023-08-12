"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function Menu() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? <>
        <li>
          <Link href={`/update/${id}`}>Update</Link>
        </li>
        <li>
          <input type="button" value="Delete" onClick={() => {
            fetch(`http://localhost:9999/topics/${id}`, {
              method: 'delete'
            })
            router.push('/');
            router.refresh();

          }} />
        </li></> : null}
    </ul>
  );
}
