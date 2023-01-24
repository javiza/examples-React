import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const getiIcon = (icon) => {
    switch (icon) {
        case 'Home':
            return (<Home/>)
        case 'TASKS':
            return (<Home/>)
        case 'SETTINGS':
            return (<Settings/>)
        default:
            break;
    }
}

const MenuListItems = ({list}) => {
    const history = useHistory();
    const navigateTo = (path) => {
        history.push(path)
    }
    return (
        <List>
            {list.map(({text, path, icon}, index) => 
            (
                <ListItem key={index} button onClick={() => navigateTo(path)}>
                    <ListItemIcon>
                        {getiIcon(icon)}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                    />
                </ListItem>
            )
            )}
        </List>
    )
}
export default MenuListItems;