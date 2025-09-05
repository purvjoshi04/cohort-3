import { useState } from "react";
import { ScreenWrapper } from "./ScreenWrapper";
import { InputField } from "./Input";
import { PrimaryButton } from "./Button";
import { Header } from "./Header";

export const EmailScreen = ({ onContinue }) => {
    const [email, setEmail] = useState("");

    return (
        <div>
            <Header />
            <ScreenWrapper title="Let's Get Started">
                <InputField value={email} onChange={setEmail} placeholder="Email" />
                <PrimaryButton onClick={onContinue} enabled={!!email} />
            </ScreenWrapper>
        </div>

    );
};
