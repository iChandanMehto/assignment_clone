import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const pausebtn = () => {
  return (
    <div>
      <DropdownMenu>
  <DropdownMenuTrigger>Pause</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />
    <DropdownMenuItem>0.5s</DropdownMenuItem>
    <DropdownMenuItem>1s</DropdownMenuItem>
    <DropdownMenuItem>2s</DropdownMenuItem>
    <DropdownMenuItem>3s</DropdownMenuItem>
    <DropdownMenuItem>4s</DropdownMenuItem>
    <DropdownMenuItem>5s</DropdownMenuItem>
    <DropdownMenuItem>6s</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default pausebtn
