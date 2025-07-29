import { memo } from 'react';
import { IconButton } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { COLORS } from './constants';

const ExpandButton = memo(({ isExpanded, onClick }) => (
  <IconButton onClick={onClick}>
    <ExpandCircleDownIcon 
      fontSize='large' 
      sx={{ 
        color: COLORS.secondary,
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease'
      }} 
    />
  </IconButton>
));

ExpandButton.displayName = 'ExpandButton';

export default ExpandButton;
