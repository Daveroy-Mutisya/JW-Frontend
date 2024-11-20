
//finished//

import React from 'react'
import { NavBar } from '@/components/NavBar';
import { ContactForm } from '@/components/ContactForm';


const ContactPage = () => {
  return (
    <>
   <div className="p-4 bg-black sticky top-0 z-50">
        <div>
          <NavBar />
        </div>
      </div>
      <section>
        < ContactForm />
      </section>
    </>
  )
}

export default ContactPage;
