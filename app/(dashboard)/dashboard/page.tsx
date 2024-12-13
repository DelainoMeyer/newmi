import Link from 'next/link';

const page = () => {
  return (
    <div>
        <ul>
            <li><Link href="/dashboard/tasktypes">Task Types</Link></li>
            <li><Link href="/dashboard/analytics">Analytics</Link></li>
        </ul>
    </div>
  )
}

export default page;