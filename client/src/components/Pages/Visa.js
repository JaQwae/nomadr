import React from 'react'

 function Visa(props) {
  console.log(props)
  return (
    <div className = "Visa">
      <h1> Country Visa Requirements!</h1>
      <div className = "Program">
        Visa Program
      </div>
      <div className = "Length">
        Length of time
      </div>
      <div className = "MonthlyIncome">
        Monthly Income Requirement
      </div>
      <div className = "Taxation">
        Taxation Information
      </div>
      <div className = "Fees">
        Visa Fee's
      </div>
      <div className = "Clearance">
        Clearance
      </div>
      <div className = "Insurance">
        Health Insurance
      </div>
    </div>
  )
}
export default Visa;