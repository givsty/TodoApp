import InputHeaderUi from '../ui/input-header/input-header'

export const InputHeader = () => {
    const handleChange = (e: React.ChangeEvent) => {
        console.log(e)
    }
    return (
        <InputHeaderUi handleChange={handleChange}/>
    )
}
