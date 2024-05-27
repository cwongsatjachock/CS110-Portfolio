const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 bg-[#77dd77] p-5 rounded-full">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/chaiwat-w/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="assets/linkedin.png"/>
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/supergoodham"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="assets/twitter.png"/>
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/victor.wongsatjachock/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="assets/facebook.png"/>
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/supergoodham/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="assets/instagram.png"/>
      </a>  

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/cwongsatjachock"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="assets/github.png"/>
      </a> 
    </div>
  )
}

export default SocialMediaIcons