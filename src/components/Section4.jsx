const Section4 = () => {
  return (
    <section className="bg-gray-200 p-8">
        <h1 className="flex justify-center font-bold text-2xl pb-4">Our Impact</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols:3 gap-4 max-w-6xl mx-auto p-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:scale-105 hover:shadow-black transition duration-350 max-w-md mx-auto">
                <iframe className="h-[240px]" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7292232697337327618?compact=1" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:scale-105 hover:shadow-black transition duration-350 max-w-md mx-auto">
                <iframe className="h-[240px]" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7168219660096581632?compact=1" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:scale-105 hover:shadow-black transition duration-350 max-w-md mx-auto">
                <iframe className="h-[240px]" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7138196515566653440?compact=1" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Section4