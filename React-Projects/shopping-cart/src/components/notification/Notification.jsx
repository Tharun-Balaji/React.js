import {Alert} from "@mui/material"

export default function Notification({message, type}) {
  return (
    <div>
      <Alert severity={type} >{ message}</Alert>
    </div>
  )
}
