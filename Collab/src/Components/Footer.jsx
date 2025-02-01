'use client';

import Link from 'next/link';
import { CustomImage } from '../Components/image'

const Footer = () => {
  return (
    <footer className="bg-custom p-4 text-center text-blue-200">
      <p className="pb-3 text-black text-sm">Powered by Codelatent</p>
      <div className="flex justify-center gap-4">
        <Link
          href="https://www.instagram.com/codelatent?igsh=d24zcHo0ODB1MG1l"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLogo"
        >
          <CustomImage src="/insta.png" alt="Instagram" width={32} height={32} />
        </Link>

        <Link
          href="mailto:aashuchoudhary52@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomImage src="/gmail.png" alt="Gmail" width={32} height={32} />
        </Link>

        <Link
          href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A105728565&keywords=code%20latent&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d52ff825-cb2d-48c3-b255-3a2736b03787&sid=N~9&spellCorrectionEnabled=false"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomImage src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
        </Link>

        <Link href="#" target="_blank" rel="noopener noreferrer">
          <CustomImage src="/twitter.png" alt="Twitter" width={32} height={32} />
        </Link>
      </div>
      <p className="mt-4 mb-1 text-sm text-black">
      <Link href="/privacy">Privacy Policy</Link></p>
      <p className="max-w-xl mx-auto text-[0.7rem] text-black">
        Your privacy is our priority. We are committed to protecting your personal data and
        ensuring that your experience with us is safe and secure. Read our detailed privacy
        policy to understand how we manage your information.
      </p>
    </footer>
  );
};

export default Footer;
