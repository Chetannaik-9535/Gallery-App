// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItemDeatils, isActive, setActiveThumbanailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItemDeatils
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbanailId(id)
  }
  return (
    <li className="ThumbnailItems-list">
      <button
        className="tumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
