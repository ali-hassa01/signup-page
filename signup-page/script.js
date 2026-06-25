document.getElementById("signupForm").addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert("Signup Successful!");

    console.log("Email:", email);
    console.log("Password:", password);
});
function googleSignup(){
    alert("Google Sign Up Clicked");
}
function forgotPassword(){
    alert("Password Reset Link Sent");
}