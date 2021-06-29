import React, {useEffect} from 'react'

const Alert = ({msg,type,hideAlert}) => {

  useEffect(() => {
    setTimeout(() => hideAlert(),2000)
  })

  return <p className={`alert alert-${type}`}>{msg}</p>


}

export default Alert
