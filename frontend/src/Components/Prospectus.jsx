import React from 'react'

const Prospectus = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white rounded shadow">
      <iframe
        src="./src/assets/Prospectus.pdf"
        width="70%"
        height="1000px"
        title="Prospectus PDF"
        style={{ border: 'none' }}
      />
    </div>
  )
}

export default Prospectus