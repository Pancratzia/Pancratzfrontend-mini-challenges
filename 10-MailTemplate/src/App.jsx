const OPTIONS = [
  {
    id: '1',
    name: 'Resignation',
    inputs: ["Name", "Position", "Company", "Date", "Reason"],
  },
  {
    id: '2',
    name: 'Welcome',
    inputs: ["Name", "Company", "Position", "Sender", "SenderPosition"],
  },
  {
    id: '3',
    name: 'Promotion',
    inputs: ["Name", "Position", "Company", "PastPosition", "NewPosition"],
  },
  {
    id: '4',
    name: 'Love Letter',
    inputs: ["SenderName", "RecipientName", "Petname"],
  }
]


const DropDown = () => {

  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-gray-700 font-bold uppercase text-lg px-1" htmlFor="templateOptions">Templates:</label>
      <select className="text-gray-700 uppercase outline-none py-1 w-full border-b-2 cursor-pointer" name="templateOptions" id="templateOptions">
        {OPTIONS.map((option) => (
          <option key={option.id} value={option.name}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}

const Input = () => {
  return (
    <div>
      Input Const
    </div>
  )
}

function App() {

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-gray-900 to-gray-700">

      <div className="bg-white w-[90%] h-[90%] max-w-[1200px] p-3">

        <h1 className="text-4xl font-bold text-center uppercase pb-3 text-gray-700">Mail Template Creator</h1>
        <h2 className="text-2xl text-center text-gray-500 pb-3 border-b-2">Made By <a href="https://github.com/Pancratzia" target="_blank" rel="noreferrer" className="font-bold">Pancratzia</a></h2>

        <div className="py-2 w-[90%] my-0 mx-auto">
          <DropDown />
        </div>

        <div>
          <Input />
        </div>

        <div>Template Email</div>

      </div>

    </div>
  );
}

export default App;
