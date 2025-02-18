import JoinCall from './JoinCall';
import StartCall from './StartCall';
import Logo from '../../assets/logo.png';
import LogoText from '../../assets/logo-text.png';
import Image from '@/components/ui/Image';

const LandingPage = () => {
  return (
    <div id="landing-page-container" className="relative flex flex-col h-full">
      <header className="flex justify-between items-center px-5 h-16 mt-4">
        <div className="flex items-center h-full pt-2 gap-4">
          <Image src={Logo} className="h-full" alt="bolo" />
          <Image src={LogoText} className=" h-full" alt="bolo" />
        </div>
      </header>

      <div className="grid grid-rows-2 2xl:grid-rows-1 2xl:grid-cols-2 px-4 2xl:px-[6em] h-full">
        <div className="flex flex-col justify-end 2xl:justify-center text-center 2xl:text-start px-16 2xl:px-0 pb-10 2xl:pb-0">
          <h1 className="text-4xl 2xl:text-5xl leading-snug font-medium line">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-800 to-pink-600 bg-clip-text text-transparent uppercase">
              Effortless{' '}
            </span>
            <br />
            Video Calling With{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-800 to-pink-600 bg-clip-text text-transparent uppercase">
              Bolo
            </span>
          </h1>
        </div>

        <div className="flex flex-col 2xl:flex-row justify-start 2xl:justify-center items-center gap-3 pt-10 2xl:pt-0">
          <StartCall />
          <span className="text-gray-500 mx-6 text-sm font-semibold">OR</span>
          <JoinCall />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
