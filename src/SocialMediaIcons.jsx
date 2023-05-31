const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/olha-dorofiychuk-655353178/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="assets/linkedin.png" />
        </a>
        <a
          className="hover:saturation-100 transition duration-500"
          href="https://github.com/OlhaDorofiychuk"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="assets/github.png" />
        </a>
        </div>
  );
};

export default SocialMediaIcons;