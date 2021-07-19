/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import HomeComponent from '../component/Home';


function Alert(props) {
    return <MuiAlert severity="info" elevation={6} variant="filled" {...props} />;
  }
const Home=()=>{
    const [open, setOpen] = React.useState(false);
    var vertical= 'bottom';
    var horizontal= 'left';
    const handleClose = () => {
        setOpen(false);
      };
      useEffect(()=>{
          setOpen(true);
          setTimeout(() => {
              setOpen(false);
          }, 5000);
      },[1])
    return (
        <>
         <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
        >
            <Alert onClose={handleClose} severity="info">
                Di chuyển Top 100 hoặc thư viện để nghe nhạc :v
            </Alert>
        </Snackbar>
        <HomeComponent />
        </>
    )
}

export default Home;