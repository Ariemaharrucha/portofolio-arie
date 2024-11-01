export const Navbar = () => {
  const downloadCv = () => {
    // cv belum update
    const fileURl = '/cv_arie.pdf';
    const link = document.createElement('a');
    link.href = fileURl;
    link.download = 'cv-arie.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className=' bg-white fixed w-full z-10'>
      <nav className="flex justify-between py-2 items-center container mx-auto">
      <div>
        <span className="font-semibold text-lg hover:text-orange-500">{`</>`}</span>
      </div>
      <div className='flex gap-8 items-center'>
        <Nav title={'#'}>Home</Nav>
        <Nav title={'#about'}>About</Nav>
        <Nav title={'#contact'}>Contact</Nav>
        <Nav title={'#Project'}>Project</Nav>
      <button className='px-5 py-3 bg-black text-white font-semibold rounded-md border-none'onClick={downloadCv}>Download CV</button>
      </div>   
      </nav>
    </header>
  )
}

const Nav = (props) => {
  const {title, children} = props;
  return (
    <a href={title} className='text-md hover:text-orange-500 hover:border-b-2 hover:border-orange-500 '>{children}</a>
  )
}