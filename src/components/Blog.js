import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import * as PhosphorIcons from '@phosphor-icons/react';
import './Blog.css';

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Drum Transcription: How AI Is Changing Music Education',
    date: '12 Nov 2025',
    readTime: '5 min read',
    excerpt: '',
    featured: true,
    size: 'large'
  },
  {
    id: 2,
    title: 'From Audio to Sheet Music in Seconds: Inside GrooveSheet\'s ML Pipeline',
    date: '28 Oct 2025',
    readTime: '7 min read',
    excerpt: '',
    featured: true,
    size: 'large'
  },
  {
    id: 3,
    title: 'MusicXML, PDF, or MIDI? Choosing the Best Export Format for Your Workflow',
    date: '07 Oct 2025',
    readTime: '5 min read',
    excerpt: 'A simple guide to understanding each export type and when to use them, whether you\'re heading into a rehearsal, DAW session, or notation software.',
    featured: false,
    size: 'medium'
  },
  {
    id: 4,
    title: 'Understanding Ghost Notes: How GrooveSheet Detects the Subtlest Rhythms',
    date: '03 Oct 2025',
    readTime: '6 min read',
    excerpt: 'A look into how ghost-note sensitivity works, why ghost notes matter musically, and how you can fine-tune detection inside GrooveSheet.',
    featured: false,
    size: 'medium'
  },
  {
    id: 5,
    title: 'How Drum Teachers Use GrooveSheet to Cut Prep Time by 80%',
    date: '27 Sep 2025',
    readTime: '5 min read',
    excerpt: 'Real instructor workflows showing how automated transcription speeds up lesson planning, student analysis, and content creation.',
    featured: false,
    size: 'medium'
  },
  {
    id: 6,
    title: 'I Tried Learning a Song Only by Ear vs Only by Notation',
    date: '03 Oct 2025',
    readTime: '4 min read',
    excerpt: 'A drummer\'s mini-experiment: learning the same track twice, once by ear and once with sheet music, and what each approach secretly teaches you.',
    featured: false,
    size: 'medium'
  },
  {
    id: 7,
    title: 'How Drummers Actually Use Transcriptions in Real Life',
    date: '06 Nov 2025',
    readTime: '6 min read',
    excerpt: 'From last-minute gig prep to flexing on TikTok, a look at the real, messy, human ways drummers use sheet music outside of music school.',
    featured: false,
    size: 'medium'
  },
  {
    id: 8,
    title: 'Why Your Drum Practice Feels Stuck (And How to Make It Fun Again)',
    date: '15 Nov 2025',
    readTime: '6 min read',
    excerpt: 'Turning stale practice routines into something you actually look forward to—with playlists, micro-goals, and recording yourself without cringing.',
    featured: false,
    size: 'medium'
  },
  {
    id: 9,
    title: 'Can You Really Learn to Play by Feel? A Deep Dive into Muscle Memory',
    date: '03 Oct 2025',
    readTime: '6 min read',
    excerpt: 'Breaking down the science (and myth) of muscle memory on the drums, and how long it actually takes for grooves to feel automatic.',
    featured: false,
    size: 'medium'
  },
  {
    id: 10,
    title: 'Steal Like a Drummer: How to Borrow Grooves Without Copying',
    date: '03 Oct 2025',
    readTime: '6 min read',
    excerpt: 'How to "sample" your favorite drummers\' ideas ethically—tweaking feel, orchestration, and tempo so it becomes your own voice behind the kit.',
    featured: false,
    size: 'medium'
  },
  {
    id: 11,
    title: 'From Bedroom Kit to First Gig: A Drummer\'s Realistic Upgrade Path',
    date: '03 Oct 2025',
    readTime: '6 min read',
    excerpt: 'What to actually upgrade (and what to ignore) on your journey from practicing at home to playing shows without blowing your entire savings.',
    featured: false,
    size: 'medium'
  }
];

const socialIcons = [
  { name: 'Facebook', component: 'FacebookLogo', href: '#facebook' },
  { name: 'Instagram', component: 'InstagramLogo', href: '#instagram' },
  { name: 'X', component: 'XLogo', href: '#x' },
  { name: 'YouTube', component: 'YoutubeLogo', href: '#youtube' },
  { name: 'TikTok', component: 'TiktokLogo', href: '#tiktok' },
  { name: 'Reddit', component: 'RedditLogo', href: '#reddit' },
  { name: 'WeChat', component: 'WechatLogo', href: '#wechat' },
  { name: 'GitHub', component: 'GithubLogo', href: '#github' },
  { name: 'LinkedIn', component: 'LinkedinLogo', href: '#linkedin' },
];

function BlogPostCard({ post }) {
  // Featured posts have overlay content, regular posts have content below image
  if (post.featured) {
    return (
      <div className={`blog-post-card ${post.size}`}>
        <div className="blog-post-image">
          {/* Placeholder for blog post image */}
        </div>
        <div className="blog-post-content blog-post-content-overlay">
          <div className="blog-post-meta">
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-divider"></span>
            <span className="blog-post-read-time">{post.readTime}</span>
          </div>
          <h3 className="blog-post-title">{post.title}</h3>
          {post.excerpt && (
            <p className="blog-post-excerpt">{post.excerpt}</p>
          )}
        </div>
      </div>
    );
  }

  // Regular posts (medium size) - image and content as siblings
  return (
    <div className={`blog-post-card ${post.size}`}>
      <div className="blog-post-image" />
      
      <div className="blog-post-content">
        <div className="blog-post-info">
          <div className="blog-post-meta">
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-divider"></span>
            <span className="blog-post-read-time">{post.readTime}</span>
          </div>
          <h3 className="blog-post-title">{post.title}</h3>
        </div>
        {post.excerpt && (
          <p className="blog-post-excerpt">{post.excerpt}</p>
        )}
      </div>
    </div>
  );
}

function Blog({ onLoginClick }) {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Group regular posts into rows of 3
  const postRows = [];
  for (let i = 0; i < regularPosts.length; i += 3) {
    postRows.push(regularPosts.slice(i, i + 3));
  }

  return (
    <div className="blog-page">
      <Header onLoginClick={onLoginClick} />
      
      <main className="blog-main">
        <div className="blog-container">
          {/* Title Section */}
          <section className="blog-title-section">
            <div className="blog-title-left">
              <h1 className="blog-title">Blog, news and updates</h1>
              <p className="blog-subtitle">Get the latest news and updates from GrooveSheet</p>
            </div>
            <div className="blog-title-icons" aria-label="Social channels">
              {socialIcons.map((icon, idx) => {
                const IconComponent = PhosphorIcons[icon.component];
                // limit to 8-9 icons similar to the Figma example width
                if (idx > 8) return null;
                return (
                  <a
                    key={icon.name}
                    href={icon.href}
                    className="blog-title-icon"
                    aria-label={icon.name}
                    title={icon.name}
                  >
                    <IconComponent size={40} weight="fill" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Social Media section removed per request */}

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="featured-posts-section">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </section>
          )}

          {/* Regular Posts Grid */}
          {postRows.length > 0 && (
            <section className="blog-posts-section">
              {postRows.map((row, rowIndex) => (
                <div key={rowIndex} className="blog-posts-row">
                  {row.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              ))}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
