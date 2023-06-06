import Link from 'next/link';
import Logo from '../app/components/logo';

export default function Home() {
  return (
    <div className="mx-auto max-w-[700px] p-4 bg-purple-300">
      <Logo />
      <div className="h-screen mt-20 space-y-20">
        <h1 className="text-3xl font-bold mb-4">HI</h1>
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
        <div className="link">
          <Link
            href="/ProjectPage"
            className="bg-blue-400  hover:bg-blue-500 text-white font-bold py-2 px-4  rounded"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
