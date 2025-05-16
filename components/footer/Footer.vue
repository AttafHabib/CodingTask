<template>
    <footer class="bg-[#1c1d1f] text-white pt-6">
        <div class="mx-auto">
            <!-- Top Section -->
            <div class="px-5 md:px-8 mb-8 flex gap-4 flex-col [@media(min-width:1260px)]:flex-row justify-start [@media(min-width:1260px)]:justify-between items-start [@media(min-width:1260px)]:items-center border-b pb-6">
                <h2 class="text-xl font-bold">Top companies choose <span class="text-purple-200">Udemy Business</span>
                    to build in-demand career skills.</h2>
                <div class="flex flex-wrap items-center gap-6">
                    <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Company Logo" class="h-12">
                    <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Company Logo"
                        class="h-12">
                    <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="Company Logo" class="h-12">
                    <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Company Logo"
                        class="h-12">
                </div>
            </div>

            <!-- Main Footer Content -->
            <div class="px-5 md:px-8 grid grid-cols-12 gap-8 mb-8">
                <div v-for="(section, index) in footerLinks" :key="index"
                    class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                    <h3 class="font-bold mb-3 text-white">{{ section.title }}</h3>
                    <ul class="space-y-1">
                        <li v-for="(link, i) in section.links" :key="i">
                            <a href="#" class="text-gray-300 hover:text-white text-[15px] word-break hover:underline">{{ link
                            }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="px-5 md:px-8 grid grid-cols-12 gap-8 bg-[#111116] py-9">
                <div v-for="(section, index) in footerLinks2" :key="index"
                    class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                    <h3 class="font-bold mb-3 text-white">{{ section.title }}</h3>
                    <ul class="space-y-1">
                        <li v-for="(link, i) in section.links" :key="i">
                            <a href="#" class="text-gray-300 hover:text-white text-[15px] hover:underline">{{ link
                            }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Section -->
            <div
                class="px-8 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-700 py-7 bg-[#111116]">
                <div class="flex items-center mb-4 md:mb-0">
                    <NavbarLogo logoUrl="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" />
                    <span class="text-sm ps-5">© 2023 Udemy, Inc.</span>
                </div>

                <div class="flex flex-wrap gap-4">
                    <a href="#" class="text-sm text-gray-300 hover:text-white">Cookie settings</a>
                </div>

                <div class="flex flex-wrap gap-4">
                    <a href="#" class="text-sm text-gray-300 hover:text-white flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M8 0c2.12 0 4.16.843 5.66 2.34C15.16 3.84 16 5.88 16 8s-.843 4.16-2.34 5.66C12.16 15.16 10.12 16 8 16s-4.16-.843-5.66-2.34C.84 12.16 0 10.12 0 8s.843-4.16 2.34-5.66C3.84.84 5.88 0 8 0m1.76 11H6.23l.05.305c.119.655.266 1.24.43 1.75l.127.365c.365.988.792 1.58 1.16 1.58s.792-.59 1.16-1.58l.126-.365q.274-.863.43-1.75l.05-.305zm-4.54 0H1.68a7.14 7.14 0 0 0 1.94 2.46a7.1 7.1 0 0 0 2.82 1.37c-.531-.868-.953-2.16-1.2-3.71l-.017-.114zm9.11 0h-3.55l-.016.114c-.245 1.54-.667 2.84-1.2 3.71a7 7 0 0 0 2.82-1.37a6.9 6.9 0 0 0 1.94-2.46v-.001zM5.1 6H1.3a7 7 0 0 0-.29 2c0 .695.101 1.37.29 2l3.8-.001l-.038-.459Q4.932 7.77 5.1 6m4.8 0H6.11a19.4 19.4 0 0 0 0 4H9.9c.138-1.33.138-2.67 0-4m4.81 0h-3.8l.04.459q.129 1.77-.04 3.54h3.8a7 7 0 0 0 0-4zM6.43 1.18l-.071.018a7.1 7.1 0 0 0-2.78 1.37a6.9 6.9 0 0 0-1.91 2.43h3.55l.017-.114c.245-1.54.667-2.84 1.2-3.71l-.001-.001zM8 1.005c-.365 0-.792.59-1.16 1.58l-.126.365a14 14 0 0 0-.43 1.75l-.051.305h3.53l-.05-.305a13 13 0 0 0-.43-1.75l-.126-.365c-.341-.922-.736-1.5-1.08-1.57l-.074-.007zm1.57.176l.065.108c.5.866.898 2.12 1.13 3.6l.016.114h3.55a7.14 7.14 0 0 0-1.94-2.46a7.1 7.1 0 0 0-2.82-1.37z" />
                        </svg>
                        <span>
                            English
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const footerLinks = [
    {
        title: 'In-demand Careers',
        links: [
            'Data Scientist',
            'IT at Stock Web Developer',
            'Cloud Engineer',
            'Project Manager',
            'Game Developer',
            'See at Career Acceleration'
        ]
    },
    {
        title: 'Web Development',
        links: ['Web Development', 'JavaScript', 'React.js', 'Angular', 'Java']
    },
    {
        title: 'ICT Certifications',
        links: [
            'Amazon AWS',
            'AWS Certified Cloud Practitioner',
            'AZ-BOS Microsoft Azure Fundamentals',
            'AWS Certified Solutions Architect - Associate',
            'Kubernetes'
        ]
    },
    {
        title: 'Leadership',
        links: [
            'Leadership',
            'Management Skills',
            'Project Management',
            'Personal Productivity',
            'Emotional Intelligence'
        ]
    },
    {
        title: 'Data Science',
        links: ['Data Science', 'Python', 'Machine Learning', 'ChatGPT', 'Deep Learning']
    },
    {
        title: 'Business Analytics',
        links: [
            'Microsoft Excel',
            'SQL',
            'Microsoft Power BI',
            'Data Analysis',
            'Business Analysis'
        ]
    },
    {
        title: 'Communication',
        links: [
            'Communication Skills',
            'Presentation Skills',
            'Public Speaking',
            'Business Writing',
            'PowerPoint Design',
            'Storytelling Techniques'
        ]
    },
    {
        title: 'Mobile & App Development',
        links: [
            'Android Development',
            'iOS Development',
            'React Native',
            'Flutter',
            'Mobile UI/UX Design'
        ]
    }

]
const footerLinks2 = [
    {
        title: 'About',
        links: [
            'About us',
            'Careers',
            'Contact us',
            'Blog',
            'Investors'
        ]
    },
    {
        title: 'Discover Udemy',
        links: [
            'Get the app',
            'Teach on Udemy',
            'Plans and Pricing',
            'Affiliate',
            'Help and Support'
        ]
    },
    {
        title: 'Udemy for Business',
        links: [
            'Udemy Business'
        ]
    },
    {
        title: 'Legal & Accessibility',
        links: [
            'Accessibility statement',
            'Privacy policy',
            'Sitemap',
            'Terms'
        ]
    }
]

</script>


<style scoped>
footer {
    background-color: #1c1d1f;
}
</style>