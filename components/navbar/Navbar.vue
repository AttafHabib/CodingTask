<template>
  <header class="bg-white shadow-sm sticky ">
    <div class="px-[1.6rem] py-[6px] hidden sm:block">
      <div class="w-full flex items-center justify-between gap-4 h-16">
        <div class="w-full">
          <div class="w-full flex items-center gap-2">
            <!-- Logo -->
            <NavbarLogo logoUrl="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" />

            <!-- Explore tech dropdown -->
            <ExploreTech />

            <!-- Search (hidden on mobile) -->
            <NavbarSearch />
          </div>
        </div>

        <!-- Navigation Items -->
        <div>
          <div class="flex w-full items-center space-x-2">
            <Dropdown :items="dropdownItems1" button-label="Udemy Business" button-class=" hidden lg:block cursor-pointer w-[130px] hover:bg-purple-300 hover:text-purple-700 flex items-center justify-center py-2.5 text-gray-800" />
            <Dropdown :items="dropdownItems2" button-label="Teach on Udemy" button-class=" hidden md:block cursor-pointer w-[130px] hover:bg-purple-300 hover:text-purple-700 flex items-center justify-center py-2.5 text-gray-800" />

            <!-- Cart -->
            <button
              class="h-[2.6rem] w-[2.6rem] hover:bg-[#ede5f9] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
              <Icon name="mdi:cart-outline" class="text-gray-700 text-xl" />
            </button>

            <!-- Auth Buttons -->
            <div class="hidden md:flex space-x-2">
              <button
                class="border font-bold h-[2.6rem] w-[80px] border-[#6d28d2] hover:bg-[#ede5f9] text-[#6d28d2] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
                Log in
              </button>
              <button
                class="border font-bold h-[2.6rem] w-[80px] border-[#6d28d2] bg-[#6d28d2] text-white hover:bg-[#892de1] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
                Sign Up
              </button>
            </div>

            <!-- Language Selector -->
            <button
              class="border h-[2.6rem] w-[2.6rem] border-[#6d28d2] hover:bg-[#ede5f9] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor"
                  d="M8 0c2.12 0 4.16.843 5.66 2.34C15.16 3.84 16 5.88 16 8s-.843 4.16-2.34 5.66C12.16 15.16 10.12 16 8 16s-4.16-.843-5.66-2.34C.84 12.16 0 10.12 0 8s.843-4.16 2.34-5.66C3.84.84 5.88 0 8 0m1.76 11H6.23l.05.305c.119.655.266 1.24.43 1.75l.127.365c.365.988.792 1.58 1.16 1.58s.792-.59 1.16-1.58l.126-.365q.274-.863.43-1.75l.05-.305zm-4.54 0H1.68a7.14 7.14 0 0 0 1.94 2.46a7.1 7.1 0 0 0 2.82 1.37c-.531-.868-.953-2.16-1.2-3.71l-.017-.114zm9.11 0h-3.55l-.016.114c-.245 1.54-.667 2.84-1.2 3.71a7 7 0 0 0 2.82-1.37a6.9 6.9 0 0 0 1.94-2.46v-.001zM5.1 6H1.3a7 7 0 0 0-.29 2c0 .695.101 1.37.29 2l3.8-.001l-.038-.459Q4.932 7.77 5.1 6m4.8 0H6.11a19.4 19.4 0 0 0 0 4H9.9c.138-1.33.138-2.67 0-4m4.81 0h-3.8l.04.459q.129 1.77-.04 3.54h3.8a7 7 0 0 0 0-4zM6.43 1.18l-.071.018a7.1 7.1 0 0 0-2.78 1.37a6.9 6.9 0 0 0-1.91 2.43h3.55l.017-.114c.245-1.54.667-2.84 1.2-3.71l-.001-.001zM8 1.005c-.365 0-.792.59-1.16 1.58l-.126.365a14 14 0 0 0-.43 1.75l-.051.305h3.53l-.05-.305a13 13 0 0 0-.43-1.75l-.126-.365c-.341-.922-.736-1.5-1.08-1.57l-.074-.007zm1.57.176l.065.108c.5.866.898 2.12 1.13 3.6l.016.114h3.55a7.14 7.14 0 0 0-1.94-2.46a7.1 7.1 0 0 0-2.82-1.37z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile navbar -->
    <div class="px-[1.6rem] py-[6px] flex items-center justify-between h-16 sm:hidden">
      <NavbarLogo logoUrl="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" />

      <!-- Cart -->
       <div class="flex items-center gap-1">
         <button
           class="h-[2.6rem] w-[2.6rem] hover:bg-[#ede5f9] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
           <Icon name="mdi:cart-outline" class="text-gray-700 text-xl" />
         </button>
         <!-- Language Selector -->
         <button
           class="border h-[2.6rem] w-[2.6rem] border-[#6d28d2] hover:bg-[#ede5f9] transition duration-300 cursor-pointer rounded-sm flex items-center justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
             <path fill="currentColor"
               d="M8 0c2.12 0 4.16.843 5.66 2.34C15.16 3.84 16 5.88 16 8s-.843 4.16-2.34 5.66C12.16 15.16 10.12 16 8 16s-4.16-.843-5.66-2.34C.84 12.16 0 10.12 0 8s.843-4.16 2.34-5.66C3.84.84 5.88 0 8 0m1.76 11H6.23l.05.305c.119.655.266 1.24.43 1.75l.127.365c.365.988.792 1.58 1.16 1.58s.792-.59 1.16-1.58l.126-.365q.274-.863.43-1.75l.05-.305zm-4.54 0H1.68a7.14 7.14 0 0 0 1.94 2.46a7.1 7.1 0 0 0 2.82 1.37c-.531-.868-.953-2.16-1.2-3.71l-.017-.114zm9.11 0h-3.55l-.016.114c-.245 1.54-.667 2.84-1.2 3.71a7 7 0 0 0 2.82-1.37a6.9 6.9 0 0 0 1.94-2.46v-.001zM5.1 6H1.3a7 7 0 0 0-.29 2c0 .695.101 1.37.29 2l3.8-.001l-.038-.459Q4.932 7.77 5.1 6m4.8 0H6.11a19.4 19.4 0 0 0 0 4H9.9c.138-1.33.138-2.67 0-4m4.81 0h-3.8l.04.459q.129 1.77-.04 3.54h3.8a7 7 0 0 0 0-4zM6.43 1.18l-.071.018a7.1 7.1 0 0 0-2.78 1.37a6.9 6.9 0 0 0-1.91 2.43h3.55l.017-.114c.245-1.54.667-2.84 1.2-3.71l-.001-.001zM8 1.005c-.365 0-.792.59-1.16 1.58l-.126.365a14 14 0 0 0-.43 1.75l-.051.305h3.53l-.05-.305a13 13 0 0 0-.43-1.75l-.126-.365c-.341-.922-.736-1.5-1.08-1.57l-.074-.007zm1.57.176l.065.108c.5.866.898 2.12 1.13 3.6l.016.114h3.55a7.14 7.14 0 0 0-1.94-2.46a7.1 7.1 0 0 0-2.82-1.37z" />
           </svg>
         </button>
       </div>
    </div>
  </header>
</template>

<script setup>
// Components are auto-imported in Nuxt 3

const dropdownItems1 = [
  {
    label: 'Get your team access to over 30,000 top Udemy courses, anytime, anywhere.',
    class: 'text-[17px] font-bold text-gray-800 leading-5 pointer-events-none pb-3 mb-2 pt-0'
  },
  {
    label: 'Try Udemy Business',
    class: 'text-white flex items-center justify-center bg-purple-600 font-bold px-4 py-2.5 rounded hover:bg-purple-500 cursor-pointer'
  }
]
const dropdownItems2 = [
  {
    label: 'Turn what you know into an opportunity and reach millions around the world.',
    class: 'text-[17px] font-bold text-gray-800 leading-5 pointer-events-none pb-3 mb-2 pt-0'
  },
  {
    label: 'Learn more',
    class: 'text-white flex items-center justify-center bg-purple-600 font-bold px-4 py-2.5 rounded hover:bg-purple-500 cursor-pointer'
  }
]

</script>