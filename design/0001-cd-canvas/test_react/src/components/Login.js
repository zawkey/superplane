import React from 'react';
import { useNavigate } from 'react-router-dom';
import githubLogo from "../images/icn-github.svg";
import bitbucketLogo from "../images/icn-bitbucket.svg";
import semaphoreLogo from "../images/semaphore-logo-sign-black.svg";
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/organizations');
  };

  return (
    <div className="login-wrapper h-full flex flex-col items-center bg-washed-gray br3 justify-start pt5 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb4">
        <img src={semaphoreLogo} alt="Semaphore Logo" className="h-6" width={26} /> <spanc className="ml2 f2 b">SuperPlane</spanc></div>
      <div className="max-w-md w-full bg-white pa4 br3 shadow-sm ba b--black-10">
        <div>
          <h3 className="text-center b dark-gray">
            Log in to SuperPlane
          </h3>
        </div>
        <form className="mt4" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm mb-6">
            <div className='mb4'>
            <button type="submit" className="bg-near-white btn btn-secondary btn-large w-full text-center inline-flex items-center justify-center">
                <img src={githubLogo} className="mr2 flex-shrink-0"/>
                Continue <span className="ml1"> with GitHub</span>
            </button>
            </div>
            <div className="mb4 hidden">
            <button type="submit" className="bg-near-white btn btn-secondary btn-large w-full text-center inline-flex items-center justify-center">
                <img src={bitbucketLogo} className="mr2 flex-shrink-0"/>
                Continue <span className="ml1"> with Bitbucket</span>
            </button>
            </div>
          </div>

          <div className=''>
          <p className="text-center gray text-xs">By continuing, you agree to our <a className='link dark-indigo hover:underline' href="https://semaphoreci.com/tos">Terms of Service</a> and <a className='link dark-indigo hover:underline' href="https://semaphoreci.com/privacy">Privacy policy</a>.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
