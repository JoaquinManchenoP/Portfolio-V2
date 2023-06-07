import Link from 'next/link';
import Logo from '../app/compnents/Logo/Logo';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="mx-auto max-w-[700px] p-4">
      <Logo />
      <div className="h-screen mt-12 space-y-12">
        <div className="greeting__links flex space-x-10">
          <h1 className="text-8xl">Hello!</h1>
          <div className="contact__links flex space-x-4 items-end">
            <Link href="https://www.linkedin.com/in/joaquinjm/">
              <AiFillLinkedin size={40} className="text-blue-500" />
            </Link>
            <Link href={'https://github.com/JoaquinManchenoP'}>
              <FaGithub size={40} className="text-purple-500" />
            </Link>
          </div>
        </div>
        <div className="project__container ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          pariatur vel quidem nulla, facere nobis, fugiat odit eaque eveniet
          cumque, nemo delectus libero voluptatum! Libero laudantium tenetur
          unde ut. Dicta rem sapiente debitis a, tenetur eligendi nihil natus
          excepturi saepe, voluptatem, fuga necessitatibus quod ea. Assumenda
          commodi dicta eum pariatur recusandae atque labore illum in voluptas!
          Numquam sunt velit fuga accusamus? Temporibus amet quia accusantium a
          libero voluptate labore odio placeat molestias! Ad, quisquam aperiam
          voluptatum sint repellendus in magni ipsam sequi sit quas soluta harum
          possimus temporibus dolore facilis voluptatibus aspernatur nulla,
          quidem cupiditate voluptas minus similique. Unde, quidem?
        </div>
        <div className="links flex justify-between mx-32">
          <div className="project__link flex flex-col">
            <span>{'>>>>'}</span>
            <span>Resume</span>
          </div>
          <Link href={'/ProjectPage'}>
            <div className="resume__link flex flex-col">
              <span>{'>>>'}</span>
              <span>Projects</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
