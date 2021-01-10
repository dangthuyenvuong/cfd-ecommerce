import useForm from "../../hooks/useForm";

const constStyle: { [key in string]: React.CSSProperties } = {

  inputError: {
    color: 'red',
    textAlign: 'left',
    marginTop: -15
  }

}


const Login = () => {

  let { data, Submit, errors, inputChange } = useForm({ username: '', password: '' }, {
    validate: {
      username: {
        required: true
      },
      password: {
        required: true
      }
    },
    message: {
      username: {
        required: 'Vui lòng điền tên đăng nhập'
      },
      password: {
        requried: 'Vui lòng điền password'
      }
    }
  })

  function _login() {
    if (Submit()) {

    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="img">
          <img src="/assets/bg.svg" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src="/assets/avatar.svg" />
            <h2 className="title">Chào mừng bạn quay lại</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
                <input type="text" className="input" placeholder="Tên đăng nhập" onChange={inputChange} name="username" />

              </div>

            </div>
            {
              errors?.username && <p className="error-text" style={constStyle.inputError}>{errors.username}</p>
            }
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                <input type="password" className="input" placeholder="Mật khẩu" onChange={inputChange} name="password" />

              </div>

            </div>
            {
              errors?.password && <p className="error-text" style={constStyle.inputError}>{errors.password}</p>
            }
            <a href="#">Quên mật khẩu?</a>
            <div className="btn" onClick={_login}>Đăng nhập</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
