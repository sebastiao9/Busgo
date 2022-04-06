export const SelectStyles = {
  menu: provided => {
    return {
      ...provided,
      boxShadow: '0px 7px 10px rgba(0,0,0,0.2)',
      borderRadius: '14px',
      overflow: 'hidden'
    }
  },
  menuList: provided => {
    return {
      ...provided,
      padding: 0
    }
  },
  option: (provided, state) => {
    return {
      ...provided,
      color: state.isSelected ? '#FFFFFF' : '#0275D8',
      fontWeight: state.isSelected ? 700 : 'normal',
      fontSize: '1.6rem',
      padding: 10,
      cursor: 'pointer'
    }
  },
  control: (_, state) => {
    const color = state.isFocused ? '#0275D8' : '#CCD5DA'

    return {
      display: 'flex',
      justifyContent: 'space-between',
      height: '4.4rem',
      alignItems: 'center',
      border: `1px solid ${color}`,
      borderRadius: '40px',
      padding: '0 1rem',
      transition: 'all 0.3s ease',
      fontSize: '1.6rem',
      width: '320px',
      cursor: 'pointer',
      // background: '#FAFAFA',
      '@media(max-width: 900px)': {
        height: '6.2rem'
      }
    }
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
  placeholder: (provided, state) => {
    return {
      ...provided,
      fontSize: '1.6rem',
      color: state.isFocused ? '#fff' : '#717983'
    }
  },
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (provided, state) => {
    const color = state.isFocused ? '#0275D8' : '#717983'

    return {
      ...provided,
      color,
      transition: 'all 0.3s ease',
      ':hover': {
        color
      }
    }
  }
}
