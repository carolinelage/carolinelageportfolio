const Experience = () => {
  return (
    <div>
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Experience</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-950 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">Software Engineer</h2>
            <p className="text-lg text-neutral-300">Google</p>
            <p className="text-lg text-neutral-300">2020 - Present</p>
            </div>
            <div className="bg-neutral-950 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">Software Engineer</h2>
            <p className="text-lg text-neutral-300">Facebook</p>
            <p className="text-lg text-neutral-300">2018 - 2020</p>
            </div>
        </div>
    </div>
  )
}

export default Experience