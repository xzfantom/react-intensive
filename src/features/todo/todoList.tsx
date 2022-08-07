import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { todoAdded } from './todoSlice'

export default function User() {
  const dispatch = useDispatch();

  return (
   <div>
      <h1>TODO list</h1>
    </div>
  )

}
