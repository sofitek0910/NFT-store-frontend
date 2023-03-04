const customInputStyles = ((theme) => ({
  textField: {
    '& .MuiInputLabel-root': {
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '26px',
      color: '#0F0E36',
      marginBottom: '10px',
      '& span': {
        color: '#55DB2E'
      }
    },
    '& .MuiOutlinedInput-input': {
      backgroundColor: 'white'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #EBEAEF',
      borderRadius: '0'
    }
  }
}))

export default customInputStyles
