import { EyeCloseIcon } from "./icons/EyeCloseIcon";
import { EyeOpenIcon } from "./icons/EyeOpenIcon";


export const TogglePassword = ({ showPassword, setShowPassword }) => {
    const handleTogglePassword = () => setShowPassword(prev => !prev);

    return (
        <div className="position-absolute top-50 translate-middle-y" style={{ right: "15px" }} onClick={handleTogglePassword}>
            {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
        </div>
    )
}