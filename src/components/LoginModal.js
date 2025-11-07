import React from 'react';
import ReactDOM from 'react-dom';
import './LoginModal.css';
import {
  X,
  Check,
  GoogleLogo,
  FacebookLogo,
  AppleLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react';

export const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Render modal using a portal to ensure it's outside the app container
  return ReactDOM.createPortal(
    <div
      className="login-modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        zIndex: 2147483647,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        className="login-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 2147483647 }}
      >
        <div className="flex flex-col w-full max-w-[645px] h-auto items-center justify-between pt-7 pb-6 px-6 relative bg-[#323033] rounded-[13px] overflow-hidden border-[16px] border-solid border-[#ffffff33]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[31.2px] whitespace-nowrap">
              Welcome to DrumScore
            </div>

            <button
              className="close-button relative w-9 h-9 cursor-pointer bg-transparent border-0 p-0 flex items-center justify-center"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={36} color="white" weight="bold" />
            </button>
          </div>

          <div className="flex flex-col h-auto items-start justify-center gap-3 relative self-stretch w-full mt-20">
            <div className="relative flex items-start justify-start self-stretch [font-family:'Hubot_Sans-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
              Continue with
            </div>

            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="flex w-7 h-7 items-center justify-center gap-[8.75px] relative bg-[#5f5e60] rounded-md">
                <Check size={21} color="white" weight="bold" />
              </div>

              <p className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Light',Helvetica] font-light text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
                Subscribe to DrumScore updates and never miss a beat!
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 relative flex-1 self-stretch w-full grow">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full relative">
                <button
                  className="auth-button bg-[linear-gradient(0deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.1)_100%)] flex flex-col items-start justify-between pt-2 pb-4 px-3 relative rounded-md overflow-hidden hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%)] transition-all"
                  style={{
                    backgroundImage: 'url(/images/Google_Bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-8 whitespace-nowrap">
                    Google
                  </div>

                  <div className="relative w-11 h-11 mt-2">
                    <GoogleLogo size={44} color="white" weight="fill" />
                  </div>
                </button>

                <button
                  className="auth-button bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%)] flex flex-col items-start justify-between pt-2 pb-4 px-3 relative rounded-md overflow-hidden hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%)] transition-all"
                  style={{
                    backgroundImage: 'url(/images/Facebook_Bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-8 whitespace-nowrap">
                    Facebook
                  </div>

                  <div className="relative w-11 h-11 mt-2">
                    <FacebookLogo size={44} color="white" weight="fill" />
                  </div>
                </button>

                <button
                  className="auth-button bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)] flex flex-col items-start justify-between pt-2 pb-4 px-3 relative rounded-md overflow-hidden hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_100%)] transition-all"
                  style={{
                    backgroundImage: 'url(/images/Apple_Bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-8 whitespace-nowrap">
                    Apple
                  </div>

                  <div className="relative w-11 h-11 mt-2">
                    <AppleLogo size={44} color="white" weight="fill" />
                  </div>
                </button>

                <button
                  className="auth-button flex flex-col items-start justify-between pt-2 pb-4 px-3 relative rounded-md overflow-hidden hover:opacity-90 transition-all"
                  style={{
                    backgroundImage: 'url(/images/Email_Bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-8 whitespace-nowrap">
                    Email
                  </div>

                  <div className="relative w-11 h-11 mt-2">
                    <EnvelopeSimple size={44} color="white" weight="fill" />
                  </div>
                </button>
              </div>

              <div className="inline-flex items-start relative flex-[0_0_auto] flex-wrap mt-2">
                <p className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Light',Helvetica] font-light text-[#a4a3a4] text-xs tracking-[0] leading-4">
                  By clicking 'Continue with Google / Apple / Facebook / Email', you agree to
                  our&nbsp;
                </p>

                <button className="relative flex items-center justify-center w-fit [font-family:'Hubot_Sans-Regular',Helvetica] font-normal text-[#a4a3a4] text-xs tracking-[0] leading-4 underline cursor-pointer bg-transparent border-0 p-0 hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
