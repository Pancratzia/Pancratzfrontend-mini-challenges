export const Button = ({ children, handleClick }) => {
    return (
      <button className="bg-violet-700 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        {children}
      </button>
    )
  }