import { Box, Stack } from '@mui/material'
import Flag from "../assets/images/Flag_of_India.png"
import DropIcon from '../svg/DropIcon'
import Light from '../svg/Light'
import People from '../svg/People'
import TVIcon from '../svg/TVIcon'
import Settings from '../svg/Settings'

const Topbar = () => {
  return (
    <Box pl={{xs:1, sm:9}} pr={{xs:1, sm:9}} sx={{backgroundColor:"#2AB998", color:"#FFFFFF", height:"40px"}} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      <Stack direction={"row"} gap={1}>
        <img src={Flag}/>
        <a style={{color:"#FFFFFF"}} href="https://www.india.gov.in/" target="_blank">GOVERNMENT OF INDIA</a>
      </Stack>
      <Stack direction={"row"} gap={1} justifyContent={"center"} alignItems={"center"}>
        <p>English</p>
        <DropIcon/>
        <Box sx={{width:"1px", height:"50px", backgroundColor:"#FFFFFF"}}></Box>
        <Light/>
        <Box sx={{width:"1px", height:"50px", backgroundColor:"#FFFFFF"}}></Box>
        <People/>
        <Box sx={{width:"1px", height:"50px", backgroundColor:"#FFFFFF"}}></Box>
        <TVIcon/>
        <Box sx={{width:"1px", height:"50px", backgroundColor:"#FFFFFF"}}></Box>
        <Settings/>
      </Stack>
    </Box>
  )
}

export default Topbar