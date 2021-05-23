import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {BsSearch} from 'react-icons/bs'
import './style.css'
import { PlaceData } from '../../data/PlaceData';


const useSelectStyles = makeStyles(()=>({
    root: {
        color: "#585858",
        fontSize: "15px",
        
    },

    icon: {
          display: "none",
    },

    select: {
        padding: "12px 0",
        borderRadius:"20px",
        "&:focus" : {
            borderRadius:"20px",
        }
    },
    nativeInput: {
        display: "none",
    }
}))
const useControlStyles = makeStyles({
    root: (props) => ({
        minWidth: '370px',
        backgroundColor:"#fff",
        height: "40px",
        borderRadius:"20px",
        cursor: "pointer",
        color: "#585858",
        fontSize: "15px",
        
    }),
      
})

const useMenuItemStyles = makeStyles(()=>({
    root: {
        color: "#585858",
        fontSize: '15px',
        paddingTop: "1px",
        paddingBottom: "1px",
        '&:hover' :{
            backgroundColor: "#408ad2 !important",
            color: "#fff",
        },
        transitions: "all 0.3s ease-in-out ",
    },
      
}))

export const HSelect = () => {
    const selectStyles = useSelectStyles();
    const controlStyles = useControlStyles();
    const menuItemStyles= useMenuItemStyles();
    
    const [place, setPlace] = useState('')

    const handleChange = (e) => {
        setPlace(e.target.value)
    }
    

    return (
        <>
            <FormControl classes={controlStyles}>  
                
                <Select
                    labelId="select-label"
                    value={place}
                    onChange={handleChange}
                    classes={selectStyles}
                >
                    <MenuItem value={0} classes= {menuItemStyles} >Choose your Destination ...</MenuItem>
                    
                    {PlaceData.map((place, index) => {
                        return (
                            <MenuItem key={index} value={place.id} classes= {menuItemStyles} > {place.id>50 && <span>&nbsp;&nbsp;</span>} {place.name}</MenuItem>
                        )
                    })}

                </Select>
                <BsSearch type="submit" className="btn-submit"/>
            </FormControl>
        </>
    );
}


