import Service from "./components/Service"

function App() {


  const services = ["Attention", "Quality", "Delivery", "Price", "Reliability", "Envelopment"]

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-slate-100 to-slate-400 flex justify-center items-center">
      <main className="w-[90%] min-h-[90%] bg-white rounded-lg shadow-xl shadow-slate-700">
        <h1 className="text-4xl font-bold text-center mt-10 mb-6 uppercase text-slate-600 font-serif">Rate Our Services</h1>

        {
          services.map(service => {
            return <Service key={service} service={service} />
          })
        }


      </main>
    </div>
  )
}

export default App
