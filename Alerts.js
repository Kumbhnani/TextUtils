import React from 'react'

export default function Alerts(props) {
  const capitlliz = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase () + lower.slice(1);
  }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitlliz(props.alert.type)}</strong> : {props.alert.msg}
      {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
