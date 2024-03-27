import React, { useState } from 'react';

import '../Styles/LoginSignup.css'

const LoginSignup = () => {
    const [action, setAction] = useState("التسجيل");
    
    return (

        <div>
            <div className='container'>
                <div className="header">

                    <div className="text">{action}</div>
                  
                </div>
                <div className="inputs">


                    <div className="input">
                        <input type="اسم المستخدم" placeholder="اسم المستخدم" />

                    </div>

                    <div className="input">
                        <input type="كلمة المرور" placeholder="كلمة المرور" />

                    </div>





                    {action === "تسجيل الدخول" ? <div></div> : <div className="input">
                        <input type="تأكيد كلمه المرور" placeholder="تأكيد كلمة المرور" />

                    </div>
                    }
                    {action === "تسجيل الدخول" ? <div></div> : <div className="input">
                        <input type="الإيميل " placeholder="الإيميل" />

                    </div>}
                    {action === "تسجيل الدخول" ? <div></div> : <div className="input">
                        <input type="الراتب الشهري" placeholder="الراتب الشهري" />

                    </div>}

                    {action === "تسجيل الدخول" ? <div></div> : <div className="input">
                        <input type="يوم الراتب" placeholder="يوم الراتب" />

                    </div>}

                </div>
                {action === "التسجيل" ? <div></div> : <div className="forgot-password">هل نسيت كلمة المرور؟ <span>اضغط هنا</span></div>}


                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("التسجيل") }}> التسجيل</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("تسجيل الدخول") }}> تسجيل الدخول</div>
                </div>

            

            {action === "تسجيل الدخول" ? <div></div> : <div className="have">هل لديك حساب بالفعل ؟ <span>اضغط هنا</span></div>}



            </div>
        </div>
    )
}
export default LoginSignup 
