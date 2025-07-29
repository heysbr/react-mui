import React, { memo } from 'react';
import { IconButton } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

/**
 * Expand button component for expandable table variant
 */
const ExpandButton = memo(({ 
  isExpanded, 
  onExpandClick, 
  rowId 
}) => (
  <IconButton onClick={() => onExpandClick(rowId)}>
    <ExpandCircleDownIcon 
      fontSize='large' 
      sx={{ 
        color: '#344054',
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease'
      }} 
    />
  </IconButton>
));

ExpandButton.displayName = 'ExpandButton';

export default ExpandButton;
