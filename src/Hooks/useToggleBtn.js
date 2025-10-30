import { useCallback, useState } from 'react'

const useToggleBtn = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = useCallback(() => {
        setIsToggled((prev) => !prev)
    }, []);
    return { isToggled, handleToggle };
}

export default useToggleBtn
