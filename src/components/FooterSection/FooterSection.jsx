import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
      <img src="/FollowUs.gif" alt="Sample GIF" 
      style={gifStyle}
      />
      </div>
      <div style={socialMediaContainer}>
        {/* Instagram Link */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/InstagramLogo.png"
            alt="Instagram"
            style={iconStyle}
          />
        </a>

        {/* Twitter Link */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/TwitterLogo.png"
            alt="Twitter"
            style={iconStyle}
          />
        </a>

        {/* Facebook Link */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/FaceBookLogo.png"
            alt="Facebook"
            style={iconStyle}
          />
        </a>

         {/* GitHub Link */}
         <a href="https://github.com/capostech" target="_blank" rel="noopener noreferrer">
          <img
            src="/GithubLogo.png"
            alt="GitHub"
            style={iconStyle}
          />
        </a>

      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#10574b',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const socialMediaContainer = {
  display: 'flex',
  justifyContent: 'center',
    marginBottom: '20px',
};

const appLinksContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const iconStyle = {
  width: '200px',
  height: '200px',
  cursor: 'pointer',
  padding : '10px',
};

const storeIconStyle = {
  width: '140px',
  height: '40px',
  cursor: 'pointer',
};

const appStoreStyle = {
  display: 'inline-block',
};

const playStoreStyle = {
  display: 'inline-block',
};

const gifStyle = {
  display: 'block',       
  margin: '0 auto',        
  width: '200px',          
  height: '200px',        
};

export default Footer;
