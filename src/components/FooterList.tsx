import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

interface IProps {
  list: string[];
}

const FooterList: React.FC<IProps> = ({ list }) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <ListItem key={index} component="div" disablePadding sx={{height:"30px"}}>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default FooterList;
