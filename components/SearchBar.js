import React from 'react'
import Select from "react-select";




function SearchBar({onListClose }) {
const searchRef = React.useRef();

    const closeSearchBar = (e) => {
        if (searchRef.current === e.target) {
          onListClose();
        }
      };

    const options = [
        {value:"Afrikaans,South Africa(af-ZA)" ,lable:"Afrikaans,South Africa(af-ZA)"},

        {value:"Albanin(Albanin)(sq-AL)", lable:"Albanin(Albanin)(sq-AL)"},

        {value:"Amharic(Ethiopia) (am-ET)",lable:"Amharic(Ethiopia) (am-ET)"},

        {value:"Arabic(arb)", lable:"Arabic(arb)"},

        {value:"Amenian(Armenia)(hy-Am)",lable:"Amenian(Armenia)(hy-Am)" },

{value:"Azerbaijani (Azerbaijan) (az-AZ)", lable:"Azerbaijani (Azerbaijan) (az-AZ)"},

{value:"Bangla (Bangladesh)(bn-BD) ", lable:"Bangla (Bangladesh)(bn-BD) " },

    ]


    const customStyles = {
        control:(provided)=>({...provided,
            width:"200px",
            borderRadius:"8px",
            boxShadow:"none",
            textAlign:"left",


        }),
        option:(provided)=>({...provided, color:"black"}),
    }  
  return (


    <div
    ref={searchRef}
    // onClick={closeSearchBar}
    >
      <Select options={options} styles={customStyles}/>
    </div>
    

  )
}

export default SearchBar  
