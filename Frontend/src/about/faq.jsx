import React from 'react'

function faq() {
  return (
   <>
   <section class="bg-white dark:bg-gray-900 mt-14">
    <div class="container px-6 pt-12 pb-2 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions.</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Are both free and paid books available?</h1>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Yes, our platform offers a variety of both free and paid books. You can explore free books anytime, but you'll need to sign in to access the paid ones.
                    </p>
                </div>
            </div>

            <div>
                <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h1 class="text-xl font-semibold text-gray-700 dark:text-white">What types of books are available?</h1>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        We offer books across all categories and types available in the market, from fiction and non-fiction to educational and reference materials.
                    </p>
                </div>
            </div>

            <div>
                <div class="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h1 class="text-xl font-semibold text-gray-700 dark:text-white">Do I need to sign in to access books?</h1>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        You can explore free books without signing in. However, for paid books, signing in is required to access and make purchases.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default faq