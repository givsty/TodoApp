import { InputHeader } from "../input-header/input-header"
import { SelectHeader } from "../select-header/select-header"
import ButtonHeaderUi from "../ui/header-button/header-button"
import SelectSmallUi from "../ui/select-header/select-header"
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <InputHeader />
            <SelectHeader />
            <SelectSmallUi />
            <ButtonHeaderUi />
        </header>
    )
}
