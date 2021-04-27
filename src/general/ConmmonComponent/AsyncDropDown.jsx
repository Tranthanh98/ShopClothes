import axios from 'axios';
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AsyncDropDown() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  // React.useEffect(() => {
  //   let active = true;

  //   if (!loading) {
  //     return undefined;
  //   }

    //   (async () => {
    //       let config ={
    //           headers: { 
    //               'Access-Control-Allow-Origin' : '*',
    //               // 'Access-Control-Allow-Methods' : '*',
    //               // 'X-Requested-With': 'XMLHttpRequest',
    //               // 'Access-Control-Allow-Headers': '*',
    //               // 'Access-Control-Allow-Credentials': '*',
    //               'Content-type': 'application/json'
    //           }
    //       }
    //       const response = axios.get('https://thongtindoanhnghiep.co/api/city', {
    //         headers: {
    //           'Access-Control-Allow-Origin' : '*',
    //           'Content-type': 'application/json'
    //         }
    //       })
    //                         .then((data)=>{
    //                           console.log("data:", data.data);
    //                         })
    //                         .catch(e => console.log("errer:", e));
    //       // await sleep(1e3); // For demo purposes.
    //       console.log("key:", response);

    //       const countries = []// response.data;
    //       console.log("key:", countries);

    //       if (active) {
    //         setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
    //       }
    //   })();

    //   return () => {
    //     active = false;
    //   };
    // }, [loading]);

    React.useEffect(() => {
      let active = true;

      if (!loading) {
        return undefined;
      }

      (async () => {
        const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000', {
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        await sleep(1e3); // For demo purposes.
        let x = await response.json();
        console.log("res:", x);
        const countries = []// await response.json();

        if (active) {
          setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
        }
      })();

      return () => {
        active = false;
      };
    }, [loading]);

    React.useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);

    return (
      <Autocomplete
        id="asynchronous-demo"
        style={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Asynchronous"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    );
  }