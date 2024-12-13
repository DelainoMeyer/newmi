import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Task Types</h1>

      <ul className = "mt-10">
        <li><Link href="/dashboard/tasktypes/important">Important Tasks</Link></li>
        <li><Link href="/dashboard/tasktypes/optional">Optional Tasks</Link></li>
        <li><Link href="/dashboard/tasktypes/weekly">Weekly Tasks</Link></li>
        <li><Link href="/dashboard/tasktypes/longterm">Long-Term Tasks</Link></li>
      </ul>
    </div>
  )
}

export default page