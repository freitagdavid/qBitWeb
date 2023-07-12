import { useStyletron } from "baseui";
import { ReactElement } from "react";


const MenuItem = ({ children }: { children: ReactElement[] | ReactElement | string }) => {
    const [css, theme] = useStyletron();
    return <div className={css({
        color: theme.colors.primary,
        padding: '0.25rem 1rem',
    })}>{children}</div>
}

const AppBar = () => {
    const [css] = useStyletron();
    return (
        <div className={css({
            display: 'flex',
        })}>
            <MenuItem>File</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>View</MenuItem>
            <MenuItem>Tools</MenuItem>
            <MenuItem>Help</MenuItem>
        </div>
    )
};

export default AppBar;