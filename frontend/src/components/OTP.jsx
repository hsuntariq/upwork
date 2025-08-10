import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// OTPVerificationReactTailwind.jsx
// Single-file React component using Tailwind CSS
// Usage: <OTPVerification phoneOrEmail="+92 300-1234567" onVerify={(otp)=>{ /* verify */ }} />

export default function OTPVerification({
    length = 6,
    phoneOrEmail = "your phone or email",
    onVerify = (otp) => console.log("Verify OTP:", otp),
    resendDelay = 30, // seconds
}) {
    const [values, setValues] = useState(Array(length).fill(""));
    const [activeIndex, setActiveIndex] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(resendDelay);
    const [disabledResend, setDisabledResend] = useState(true);
    const [error, setError] = useState("");
    const inputsRef = useRef([]);

    useEffect(() => {
        inputsRef.current = inputsRef.current.slice(0, length);
    }, [length]);

    useEffect(() => {
        // countdown for resend
        let timer = null;
        if (disabledResend) {
            timer = setInterval(() => {
                setSecondsLeft((s) => {
                    if (s <= 1) {
                        clearInterval(timer);
                        setDisabledResend(false);
                        return resendDelay;
                    }
                    return s - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [disabledResend, resendDelay]);

    useEffect(() => {
        // focus active input
        const node = inputsRef.current[activeIndex];
        if (node) node.focus();
    }, [activeIndex]);

    function handleChange(e, idx) {
        const raw = e.target.value;
        // allow only digits
        const char = raw.replace(/[^0-9]/g, "");
        if (!char) return;

        const next = [...values];
        // if user pasted multiple digits, distribute
        if (char.length > 1) {
            for (let i = 0; i < char.length && idx + i < length; i++) {
                next[idx + i] = char[i];
            }
            setValues(next);
            const newIndex = Math.min(length - 1, idx + char.length);
            setActiveIndex(newIndex);
            return;
        }

        next[idx] = char;
        setValues(next);
        if (idx < length - 1) setActiveIndex(idx + 1);
    }

    function handleKeyDown(e, idx) {
        const key = e.key;
        if (key === "Backspace") {
            e.preventDefault();
            const next = [...values];
            if (next[idx]) {
                next[idx] = "";
                setValues(next);
                setActiveIndex(idx);
            } else if (idx > 0) {
                // move left
                next[idx - 1] = "";
                setValues(next);
                setActiveIndex(idx - 1);
            }
        } else if (key === "ArrowLeft" && idx > 0) {
            setActiveIndex(idx - 1);
        } else if (key === "ArrowRight" && idx < length - 1) {
            setActiveIndex(idx + 1);
        }
    }

    function handlePaste(e) {
        e.preventDefault();
        const text = e.clipboardData.getData("text").trim();
        const digits = text.replace(/[^0-9]/g, "");
        if (!digits) return;
        const next = [...values];
        for (let i = 0; i < digits.length && i < length; i++) next[i] = digits[i];
        setValues(next);
        setActiveIndex(Math.min(length - 1, digits.length));
    }


    const navigate = useNavigate()
    // frontend se araha ha
    const { user } = useSelector((state) => state.auth)


    function submitOtp() {
        const otp = values.join("");
        if (otp.length !== length || values.some((v) => v === "")) {
            setError(`Please enter the ${length}-digit code.`);
            return;
        }
        setError("");


        // get the otp from localstorage



        let bOTP = user?.otp

        if (otp == bOTP) {
            navigate('/work')
        } else {
            setError('Invalid OTP or OTP expired!')
        }



    }

    function resend() {
        // placeholder: you should call your resend API here
        console.log("Resend code to:", phoneOrEmail);
        setDisabledResend(true);
        setSecondsLeft(resendDelay);
        // clear inputs
        setValues(Array(length).fill(""));
        setActiveIndex(0);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">OTP Verification</h2>
                <p className="text-sm text-gray-500 mb-6">Enter the code sent to <span className="font-medium text-gray-700">{phoneOrEmail}</span></p>

                <div
                    className="flex gap-2 justify-center mb-4"
                    onPaste={handlePaste}
                    aria-label={`Enter ${length}-digit verification code`}
                >
                    {Array.from({ length }).map((_, idx) => (
                        <input
                            key={idx}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            value={values[idx]}
                            ref={(el) => (inputsRef.current[idx] = el)}
                            onChange={(e) => handleChange(e, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            className={`w-12 h-12 text-center text-lg rounded-md border focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow ${values[idx] ? "border-green-500 shadow-sm" : "border-gray-200"
                                }`}
                            aria-label={`Digit ${idx + 1}`}
                        />
                    ))}
                </div>

                {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

                <button
                    onClick={submitOtp}
                    className="w-full py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-700 transition"
                >
                    Verify Code
                </button>

                <div className="mt-4 text-center text-sm text-gray-600">
                    <p>
                        Didn\'t get the code?{' '}
                        <button
                            onClick={resend}
                            disabled={disabledResend}
                            className={`font-medium underline ml-1 ${disabledResend ? 'opacity-50 cursor-not-allowed' : 'text-green-500'}`}
                        >
                            Resend
                        </button>
                        {disabledResend && <span className="ml-2">(available in {secondsLeft}s)</span>}
                    </p>
                </div>

                <div className="mt-4 text-xs text-gray-400 text-center">
                    <p>Tip: You can paste the full code (Ctrl/Cmd+V) — the inputs will auto-fill.</p>
                </div>
            </div>
        </div>
    );
}
