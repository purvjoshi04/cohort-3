import { Route, Routes } from "react-router-dom"
import { EmailScreen } from "../components/EmailVerify";
import { VerifyAge } from '../components/VerifyAge';
import { Opt } from "../components/Otp";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<VerifyAge placeholder={"Your Birth Year"} />} />
            <Route path='/email' element={<EmailScreen placeholder={"Email"} />} />
            <Route path="/verifyemail" element={<Opt />} />
        </Routes>
    )
}