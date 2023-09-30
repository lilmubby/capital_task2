import React from 'react'
import { categories } from '../../lib'

const DropDownOptions = () => {
  return (
    <select name="title" id="title">
    {
      categories.map((name: string) => (
        <option value={name} key={name}>
          {name}
        </option>
      ))
    }
    </select>
  )
}

export default DropDownOptions