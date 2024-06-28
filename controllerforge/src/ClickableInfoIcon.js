import InfoIcon from '@mui/icons-material/Home';

const ClickableInfoIcon = ({onClick}) => {
    return (
        <button onClick={onClick} style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <InfoIcon style={{fontSize: 32, color: 'blue'}}/>
        </button>
    );
};

export default ClickableInfoIcon;