import './style'
import { Header, Icon } from './style'

const HeaderContent = ({ handleTheme, mode }) => {
  return (
    <Header>
      <Icon onClick={handleTheme} mode={mode} />
    </Header>
  )
}

export default HeaderContent