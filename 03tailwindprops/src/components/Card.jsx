import React from 'react'

function Card({userName, btnText="Visit Me"}) {
  return (
    <div>
      <figure className="md:bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {userName}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {btnText || "Visit Me"}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
