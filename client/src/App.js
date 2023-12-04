import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Home from "./components/home/Home";
import CAT from "./components/CAT/CAT";
import GATE from "./components/gate/GATE";
import UPSC from "./components/UPSC/UPSC";
import Inter from "./components/Inter/Inter";
import Chat from "./components/Chat/Chat";
import AboutUs from "./components/AboutUs/AboutUs";
import {Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";

function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/dash");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])


  return (
    <>
      {
        data ? (
          <>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/CAT" element={<CAT />} />
              <Route path="*" element={<Error />} />
              <Route path="/GATE" element={< GATE />} />
              <Route path="/Inter" element={<Inter />} />
              <Route path="/UPSC" element={<UPSC />} />
              <Route path="/Chat" element={<Chat />} />
              <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
    }

export default App;




























