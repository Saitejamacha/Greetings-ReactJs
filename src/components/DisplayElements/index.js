import './index.css'

const DisplayElements = props => {
  const {displayElements, onClickRespectiveBtn, isActive} = props
  const {id, imageUrl, buttonText, imageAltText} = displayElements

  const onClickLanguageBtn = () => {
    onClickRespectiveBtn(id, imageUrl, imageAltText)
  }

  console.log(isActive)

  const activeClass = isActive ? 'activeStyle' : null

  return (
    <li>
      <button
        type="button"
        className={activeClass}
        onClick={onClickLanguageBtn}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default DisplayElements
