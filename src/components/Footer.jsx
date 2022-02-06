import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <small>© 2022 Farai Mutukumira, Lubna Khalid, Hyeran Park, Jiao Jiao Ding (Group #12)</small>

        <div class="icons">
          <a href="https://www.instagram.com" target="blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com" target="blank"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.youtube.com/watch?v=2v7Nk-zfjxc" target="blank"><i class="fab fa-youtube"></i></a>
          <a href="https://www.twitter.com" target="blank"><i class="fab fa-twitter-square"></i></a>
        </div>
      </footer>
    </div>
  );
}
