<template>
  <MultiDropDown buttonClass="hidden [@media(min-width:992px)]:block" buttonText="Explore" variant="text" size="md" :main-items="menuData" dropdown-width="16rem"
    inner-dropdown-width="16rem" nested-dropdown-width="16rem" :auto-open-first-item="true" />
</template>

<script setup>
const menuData = [
  {
    title: "Explore by Goal",
    items: [
      {
        label: "Launch a new career",
        items: [
          {
            label: "Technology",
            items: [
              { label: "Web Development" },
              { label: "Mobile Development" },
              { label: "Data Science" }
            ]
          },
          {
            label: "Business",
            items: [
              { label: "Digital Marketing" },
              { label: "Finance" },
              { label: "Management" }
            ]
          }
        ]
      },
      {
        label: "Development",
        items: [
          { label: "Python" },
          { label: "JavaScript" },
          { label: "Java" }
        ]
      },
      {
        label: "Business",
        items: [
          { label: "Entrepreneurship" },
          { label: "Communication" },
          { label: "Business Strategy" }
        ]
      },
      {
        label: "IT & Software",
        items: [
          { label: "AWS Certification" },
          { label: "Ethical Hacking" },
          { label: "Network Security" }
        ]
      },
      {
        label: "Design",
        items: [
          { label: "Photoshop" },
          { label: "Figma" },
          { label: "UI/UX Design" }
        ]
      },
      {
        label: "Advance your career",
        items: [
          { label: "Leadership Training" },
          { label: "Project Management" },
          { label: "Public Speaking" }
        ]
      },
      {
        label: "Technology",
        items: [
          { label: "AWS Certified" },
          { label: "Google Cloud" },
          { label: "Microsoft Azure" }
        ]
      },
      {
        label: "Project Management",
        items: [
          { label: "PMP" },
          { label: "Scrum Master" },
          { label: "Agile Certified" }
        ]
      },
      {
        label: "Data Science",
        items: [
          { label: "TensorFlow" },
          { label: "Data Analytics" },
          { label: "Machine Learning" }
        ]
      },
      {
        label: "Learn new skills",
        items: [
          {
            label: "Creative",
            items: [
              { label: "Photography" },
              { label: "Graphic Design" },
              { label: "Video Editing" }
            ]
          },
          {
            label: "Technical",
            items: [
              { label: "Programming" },
              { label: "Cybersecurity" },
              { label: "Cloud Computing" }
            ]
          }
        ]
      }
    ]
  },


]
</script>