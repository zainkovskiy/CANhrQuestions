import React from "react";
import { Button } from "@mui/material";

import './Title.scss';

export const Title = ({ title }) => {
  return (
    <div className='title'>
      {title}
    </div>
  )
}