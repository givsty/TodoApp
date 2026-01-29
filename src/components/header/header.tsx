import { InputHeader } from "../input-header/input-header"
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <InputHeader />
        </header>
    )
}
