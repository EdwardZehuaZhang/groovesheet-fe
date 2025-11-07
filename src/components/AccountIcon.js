import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import image from './icons/image.svg';
import vector2 from './icons/vector-2.svg';
import vector from './icons/vector.svg';

// Lightweight Component17 stub used by original design (keeps compatibility)
const Component17 = ({ className }) => (
  <div className={className} style={{ width: 24, height: 24 }} aria-hidden />
);

export const AccountIcon = () => {
  return (
    <div className="inline-flex items-center justify-end gap-6 relative">
      <Component17 className="!flex-[0_0_auto] !left-[unset] !top-[unset]" />

      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        <div
          className="relative w-7 h-7 overflow-hidden aspect-[1]"
          style={{ width: 28, height: 28 }}
        >
          <img
            className="absolute w-full h-full"
            alt="Vector"
            src={vector}
            style={{ objectFit: 'cover' }}
          />

          <img
            className="absolute"
            alt="Vector"
            src={image}
            style={{ width: '50%', height: '50%', top: '9%', left: '21%' }}
          />

          <img
            className="absolute"
            alt="Vector"
            src={vector2}
            style={{ width: '75%', height: '21.87%', top: '59%', left: '9%' }}
          />
        </div>

        <div
          className="text-center leading-[normal] relative flex items-center justify-center w-fit mt-[-1px] font-normal text-[#cfd3d6] text-2xl tracking-[0]"
          style={{ fontFamily: "'Hubot_Sans-Regular',Helvetica", fontSize: 16 }}
        >
          Account
        </div>

        {/* Transparent UserButton overlay to preserve Clerk menu functionality */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <UserButton
            afterSignOutUrl="/"
            appearance={{ elements: { userButtonAvatarBox: 'hidden' } }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountIcon;
