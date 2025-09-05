import { useState } from "react";
import { ScreenWrapper } from "./ScreenWrapper";
import { InputField } from "./Input";
import { PrimaryButton } from "./Button";

export const VerifyAge = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <Header />
            <ScreenWrapper
                title="Verify Your Age"
                subtitle="Please confirm your birth year. This data will not be stored."
            >
                <InputField value={value} onChange={setValue} placeholder="Your Birth Year" />
                <PrimaryButton enabled={!!value} />
            </ScreenWrapper>
        </div>

    );
};
