import { Dialog } from '@headlessui/react'

export default function Modal({ isOpen, setIsOpen, children }) {
  return (
    <>
      <Dialog as='div' className='relative z-10' open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='fixed inset-0 bg-white opacity-70 ' />

        <div className='fixed inset-0 overflow-y-auto '>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Dialog.Panel className='p-8 bg-cardColor border border-cardBorderColor sm:w-[577px] transform overflow-hidden rounded-md text-left  shadow-xl transition-all'>
              <div>{children}</div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
