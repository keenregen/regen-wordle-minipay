function Footer() {
  return (
    <footer
      className="flex flex-col justify-center items-center bg-[#212529]"
      style={{ borderTop: '1px solid dimgrey' }}
    >
      <p className="m-0 py-3 text-white flex text-center">
        {/* &copy; {new Date().getFullYear()} RegenWise */} For questions,
        comments and bugs: keenregen@gmail.com{' '}
      </p>
    </footer>
  );
}

export default Footer;
