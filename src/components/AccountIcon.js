import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { User } from '@phosphor-icons/react';

// Lightweight Component17 stub used by original design (keeps compatibility)
const Component17 = ({ className }) => (
  <div className={className} style={{ width: 24, height: 24 }} aria-hidden />
);

export const AccountIcon = ({ compact = false }) => {
  // compact: render minimal markup for mobile menu so it looks like other links
  if (compact) {
    return (
      <div className="account-button compact relative" style={{ width: '100%' }}>
        <div
          className="account-label text-left"
          // Use `inherit` for fontSize/lineHeight so the label matches surrounding
          // `.mobile-nav-item` sizing (mobile) and other nav items where appropriate.
          style={{
            fontFamily: "'Hubot_Sans-Regular',Helvetica",
            color: '#cfd3d6',
            fontSize: 'inherit',
            lineHeight: 'inherit',
          }}
        >
          Account
        </div>

        {/* Keep the Clerk UserButton overlay so clicking the row opens the user menu */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <UserButton
            afterSignOutUrl="/"
            appearance={{ elements: { userButtonAvatarBox: 'hidden' } }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="account-button inline-flex items-center justify-end gap-6 relative">
      <Component17 className="!flex-[0_0_auto] !left-[unset] !top-[unset]" />

      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        <div
          className="flex items-center justify-center account-icon"
          style={{ width: 32, height: 32 }}
        >
          {/* Use Phosphor's User icon to replace custom SVG composition */}
          <User size={28} weight="regular" className="text-[#cfd3d6]" />
        </div>

        {/* Use the shared `.account-label` class so sizing/line-height matches other nav items.
            Remove manual negative margin which caused baseline misalignment on desktop. */}
        <div
          className="account-label"
          // Nudge down 1px to better match baselines with other nav items like the language
          // selector. Using transform avoids affecting layout/flow.
          style={{ fontFamily: "'Hubot_Sans-Regular',Helvetica", transform: 'translateY(1px)' }}
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
