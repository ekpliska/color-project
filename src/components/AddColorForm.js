import React from 'react'
import PropTypes from 'prop-types'

const AddColorForm = ({ onNewColor = f => f }) => {

    let _title, _color

    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                type="text"
                placeholder="Color title..." required className="add-color__input" />
            <input ref={input => _color = input}
                type="color" required />
            <button className="add-color__button">ADD</button>
        </form>
    )

}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm;