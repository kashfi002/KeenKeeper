import React from 'react';
import fbImg from '../../assets/facebook.png';
import twitterImg from '../../assets/twitter.png';
import instaImg from '../../assets/instagram.png';

 const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-green-900 text-primary-content p-10">
  <aside>
    <h1 className='text-3xl font-bold text-white'>Keen Keeper</h1>
    <p className="text-white">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
  </aside>
  <nav>
    <h1 className='text-2xl font-bold text-center text-white'>Social Links</h1>
    <div className="grid grid-flow-col gap-4">
      <a>
        <img src={fbImg} alt="Facebook" />
      </a>
      <a>
        <img src={twitterImg} alt="Twitter" />
      </a>
      <a>
        <img src={instaImg} alt="Instagram" />
      </a>
    </div>
  </nav>
   <div className="divider"></div>
  <aside className='flex justify-between'>
    <p>© 2026 KeenKeeper- All right reserved</p>
    <p>Privacy Policy . Terms of Service . Cookies</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;
          