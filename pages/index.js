import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Alert, Button } from 'flowbite-react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Label, TextInput } from 'flowbite-react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h4>Color</h4>
      <div className='flex gap-5'>
        Primary
        <div className='h-12 w-12 rounded-sm bg-primary-500'></div>
        Secondary
        <div className='h-12 w-12 rounded-sm bg-secondary-900'></div>
        Ternary
        <div className='h-12 w-12 rounded-sm bg-ternary-500'></div>
      </div>
      <h4>Buttons</h4>
      <div className="flex flex-wrap items-start gap-2 mb-4">
        <Button size="xs" color='primary'>Next Page</Button>
        <Button size="sm" color='primary'>Next Page</Button>
        <Button size="md" color='primary'>Next Page</Button>
        <Button size="lg" color='primary'>Next Page</Button>
      </div>
      <div className="flex flex-wrap items-start gap-2 mb-4">
        <Button size="xs" color='secondary'>Next Page</Button>
        <Button size="sm" color='secondary'>Next Page</Button>
        <Button size="md" color='secondary'>Next Page</Button>
        <Button size="lg" color='secondary'>Next Page</Button>
      </div>
      <div className="flex flex-wrap items-start gap-2 mb-4">
        <Button size="xs" color='ternary'>Next Page</Button>
        <Button size="sm" color='ternary'>Next Page</Button>
        <Button size="md" color='ternary'>Next Page</Button>
        <Button size="lg" color='ternary'>Next Page</Button>
      </div>

      <div className="flex flex-wrap items-start gap-2 mb-4">
        <Button outline size="xs" color='primary'>Next Page</Button>
        <Button outline size="sm" color='primary'>Next Page</Button>
        <Button outline size="md" color='primary'>Next Page</Button>
        <Button outline size="lg" color='primary'>Next Page</Button>
      </div>
      <div className="flex flex-wrap items-start gap-2 mb-4">
        <Button outline size="xs" color='secondary'>Next Page</Button>
        <Button outline size="sm" color='secondary'>Next Page</Button>
        <Button outline size="md" color='secondary'>Next Page</Button>
        <Button outline size="lg" color='secondary'>Next Page</Button>
      </div>
      <div className="flex flex-wrap items-start gap-2">
        <Button outline size="xs" color='ternary'>Next Page</Button>
        <Button outline size="sm" color='ternary'>Next Page</Button>
        <Button outline size="md" color='ternary'>Next Page</Button>
        <Button outline size="lg" color='ternary'>Next Page</Button>
      </div>
      <div className="flex flex-wrap items-start gap-2">
        <Button color="primary">
          Next
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="md" color="primary" isProcessing>
          Click me!
        </Button>
        <Button color="primary" disabled>Back</Button>
      </div>


      <h4>Forms</h4>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email3" value="Your email" />
        </div>
        <TextInput
          id="email3"
          type="email"
          placeholder="First Name"
          color="failure"
          className='mb-3'
          required
        />
        <TextInput
          id="email3"
          type="email"
          placeholder="First Name"
          required
        />
      </div>
    </div>
  )
}
