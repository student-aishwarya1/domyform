/*function sendOTP() {
    // Simulate sending an OTP to the email
    alert("OTP sent to your email!");
    // For simplicity, let's assume the OTP is "123456"
    sessionStorage.setItem("otp", "123456");
}*/

function sendOTP(){
    const email=document.getElementById("email");
    const otpverify=document.getElementsByClassName("email-verify")[0];

    let otp_code=Math.floor(Math.random()*10000);
    let emailbody=`<h1> your OTP is </h1>$(otp_code)`;
    Email.send({
        SecureToken : "d67a1142-2a4f-428d-bc15-af6e2c2cb006",
        To : email.value,
        From : " aishwaryageed4@gmail.com",
        Subject : "Email OTP using Javascript",
        Body : "And this is the body"
    }).then(
      message => {
        if(massage==="OK"){
            alert("OTP sent to your email"+email.value);

            otpverify.style.display="flex";
            let otp_inp= document.getElementById("otp-input");
            let otp_btn= document.getElementById("btn-verify-otp");

            otp_btn.addEventListener("click"),()=>{

                if(otp_inp.value==otp_code){
                    alert("Email adderess varified...");
                    otpverifyd.style.display-"none";
                    email.value="";


                }
                else{
                    alert("Invelid OTP")
                }
            }
        }
      }
    );
}

function validateForm() {
    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org)$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address ending with @ and .com or .org');
        return false;
    }

    // Validate OTP
    const otp = document.getElementById('otp').value;
    const storedOtp = sessionStorage.getItem("otp");
    if (otp !== storedOtp) {
        alert('Invalid OTP');
        return false;
    }

    // Validate phone number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[789]\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number starting with 7, 8, or 9');
        return false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.[0-9])(?=.[a-zA-Z]).{10,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 10 characters long and contain at least one numerical digit');
        return false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match');
        return false;
    }

    return true;
}