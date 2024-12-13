const page = ({params}: {params: {tasktype: string}}) => {
    const {tasktype} = params;
    return (
    <h1 className="text-3xl">Task Type: {tasktype}</h1>
  )
}

export default page;