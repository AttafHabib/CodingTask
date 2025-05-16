export const useNavbar = () => {
  const activeSection = ref('business')
  
  const setActiveSection = (section: string) => {
    activeSection.value = section
  }
  
  return {
    activeSection,
    setActiveSection
  }
}