import React from 'react';

function Title({ children, id }) {
   return (
      <div>
      <h1
         id={id && id}
         className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
      >
         {children}
      </h1>
      </div>
   )
}

export default Title;