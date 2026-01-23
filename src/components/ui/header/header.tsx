import ButtonHeaderUi from "../header-button/header-button"
import InputHeaderUi from "../input-header/input-header"
import SelectSmallUi from "../select-header/select-header"
import style from './Header.module.css'

export const HeaderUi = () => {
  return (
    <header className={style.header}>
        <InputHeaderUi />
        <SelectSmallUi />
        <ButtonHeaderUi />
    </header>
  )
}
