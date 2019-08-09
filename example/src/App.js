import React from 'react'

import Select from 'react-accessible-select-box'
import "../node_modules/react-accessible-select-box/dist/select-box.css"

export default () => {
  const options = [
    { value: "india", label: "India" },
    { value: "us", label: "USA" },
    { value: "australia", label: "Australia" },
    { value: "newzealand", label: "New Zealand" },
    { value: "england", label: "England" },
    { value: "singapore", label: "Singapore" },
  ]

  return (
    <div>

      <Select options={options} />
    </div>
  )
}
