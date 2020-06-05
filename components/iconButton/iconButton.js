import { iconButton } from './iconButton.scss';

const IconButton = ({ icon, onClick = () => null }) => (
  <button aria-hidden="true" onClick={onClick} className={iconButton}>
    {icon}
  </button>
);

export default IconButton;
