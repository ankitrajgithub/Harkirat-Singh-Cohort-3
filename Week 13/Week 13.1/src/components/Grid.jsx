export function Grid() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid md:grid-cols-12">
          <h1 className="bg-blue-300 col-span-1 md:col-span-5">Hii</h1>
          <h1 className="bg-pink-300 col-span-1 md:col-span-1">Hello</h1>
          <h1 className="bg-yellow-300 col-span-1 md:col-span-5">Bye</h1>
          <h1 className="bg-red-300 col-span-1 md:col-span-1">Bye</h1>
          <h1 className="bg-green-300 col-span-1 md:col-span-1">Bye</h1>
          <h1 className="bg-orange-300 col-span-1 md:col-span-12">Bye</h1>
      </div>
    </>
  )
}