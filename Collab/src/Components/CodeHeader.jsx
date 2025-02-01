'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { CustomImage } from '../Components/image'
import { usePathname } from 'next/navigation';


export default function CodeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy">
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 fixed top-0 left-0 w-full z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <span className="lg:text-[1.7em] font-semibold text-blue-200 sm:text-[1.4rem]">
              Code<span className="text-[#e45f2b]">Latent</span>
            </span>
            <span className="lg:text-[1.7em] font-semibold text-blue-200 pl-2 sm:text-[1.4rem]">
               <span className="text-[1rem]">X </span><span className="text-[#e45f2b]">VR</span>
               Academics
            </span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://codelatent.fermion.app/login" className="text-sm font-semibold text-blue-200">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-blue-900 via-purple-900 to-blue-500 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between text-blue-200">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Code Latent</span>
                <CustomImage
                  alt="Logo"
                  src="/code-lint-jpg-logo.jpg" // Place your image in the public folder
                  className="h-10 rounded-lg w-auto"
                  width={40}
                  height={40}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-blue-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <a
                    href="https://codelatent.fermion.app/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-blue-200 hover:bg-black-50 hover:border-blue-200 hover:border-b-2"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
