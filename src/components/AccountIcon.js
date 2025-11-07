import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { User } from '@phosphor-icons/react';

// Lightweight Component17 stub used by original design (keeps compatibility)
const Component17 = ({ className }) => (
  <div className={className} style={{ width: 24, height: 24 }} aria-hidden />
);

export const AccountIcon = () => {
  return (
    <div className="inline-flex items-center justify-end gap-6 relative">
      <Component17 className="!flex-[0_0_auto] !left-[unset] !top-[unset]" />

      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        <div className="flex items-center justify-center" style={{ width: 32, height: 32 }}>
          {/* Use Phosphor's User icon to replace custom SVG composition */}
          <User size={28} weight="regular" className="text-[#cfd3d6]" />
        </div>

        <div
          className="account-label text-center leading-[normal] relative flex items-center justify-center w-fit mt-[-1px]"
          style={{ fontFamily: "'Hubot_Sans-Regular',Helvetica" }}
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
