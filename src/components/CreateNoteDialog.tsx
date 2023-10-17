'use client'
import React from 'react'
import { Dialog, 
        DialogContent, 
        DialogHeader, 
        DialogTrigger, 
        DialogTitle, 
        DialogDescription, 
    } from './ui/dialog'
import { Input } from './ui/input'    
import { Plus } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}


const CreateNoteDialog = (props: Props) => {

const [input, setInput] = React.useState("");
 
    
  return (
<Dialog>
    <DialogTrigger>
        <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
            <Plus className="w-6 h-6 text-green-600" strokeWidth={3}></Plus>
            <h2 className="font-semibold text-green-600 sm:mt-2">New Note Book</h2>
        </div>
   
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>New Note Book</DialogTitle>
                <DialogDescription>
                You can create a new note by clicking the button below
                </DialogDescription>
        </DialogHeader>
        <form>
            <Input value={input} onChange={(e)=>setInput(e.target.value)}
             placeholder="Name..." />
            <div className="h-4"></div>
            <div className="flex items-center gap-3">
            <Button type="reset" variant={"secondary"}>
                Cancel
            </Button>
            <Button 
            type="submit" 
            className="bg-green-600">
                Create
            </Button>
            </div>
        </form>
    </DialogContent>
</Dialog>  
)}

export default CreateNoteDialog